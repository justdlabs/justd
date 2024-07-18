'use client'

import React from 'react'

import {
  animate,
  AnimatePresence,
  type Inertia,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from 'framer-motion'
import {
  Button,
  type ButtonProps,
  Dialog,
  type DialogProps,
  Heading,
  type HeadingProps,
  Modal,
  ModalOverlay
} from 'react-aria-components'

import { ModalClose, ModalDescription } from './modal'
import { cn } from './primitive'

const inertiaTransition: Inertia = {
  type: 'inertia',
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300
}
const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1]
}
const drawerMargin = 34
const drawerRoundedCorner = 12
interface DrawerContextType {
  isOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  withNotch?: boolean
}

const DrawerContext = React.createContext<DrawerContextType | undefined>(undefined)

const useDrawerContext = () => {
  const context = React.useContext(DrawerContext)
  if (context === undefined) {
    throw new Error('useDrawerContext must be used within a Drawer')
  }
  return context
}

/**
 * Primitives stick to the drawer, ain't getting exported to other components.
 */
const ModalPrimitive = motion(Modal)
const ModalOverlayPrimitive = motion(ModalOverlay)
const DrawerOverlayPrimitive = (props: React.ComponentProps<typeof ModalOverlayPrimitive>) => {
  const { closeDrawer, withNotch } = useDrawerContext()

  const h = window.innerHeight - drawerMargin
  const y = useMotionValue(h)
  const bgOpacity = useTransform(y, [0, h], [0.5, 0])
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`

  return (
    <>
      <ModalOverlayPrimitive
        isOpen
        onOpenChange={closeDrawer}
        className="fixed inset-0 z-50"
        style={{ backgroundColor: bg as any }}
      >
        <ModalPrimitive
          className={cn(
            'absolute bottom-0 w-full rounded-t-2xl bg-tertiary shadow-lg ring-1 ring-fg/10',
            props.className
          )}
          initial={{ y: h }}
          animate={{ y: 0 }}
          exit={{ y: h }}
          transition={staticTransition}
          style={{
            y,
            top: drawerMargin,
            paddingBottom: window.screen.height
          }}
          drag="y"
          dragConstraints={{ top: 0 }}
          onDragEnd={(_e, { offset, velocity }) => {
            if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
              closeDrawer()
            } else {
              animate(y, 0, { ...inertiaTransition, min: 0, max: 0 })
            }
          }}
          {...props}
        >
          <>
            {withNotch && <div className="notch mx-auto mt-2 h-1.5 w-10 rounded-full bg-fg/20" />}
            {props.children}
          </>
        </ModalPrimitive>
      </ModalOverlayPrimitive>
    </>
  )
}

interface DrawerContentPrimitiveProps extends Omit<React.ComponentProps<typeof Modal>, 'children'> {
  children?: DialogProps['children']
}
const DrawerContentPrimitive = (props: DrawerContentPrimitiveProps) => {
  const { isOpen } = useDrawerContext()

  const h = window.innerHeight - drawerMargin
  const y = useMotionValue(h)

  const bodyScale = useTransform(y, [0, h], [(window.innerWidth - drawerMargin) / window.innerWidth, 1])
  const bodyTranslate = useTransform(y, [0, h], [drawerMargin - drawerRoundedCorner, 0])
  const bodyBorderRadius = useTransform(y, [0, h], [drawerRoundedCorner, 0])
  return (
    <motion.div
      style={{
        scale: bodyScale,
        borderRadius: bodyBorderRadius,
        y: bodyTranslate,
        transformOrigin: 'center 0'
      }}
    >
      <AnimatePresence>{isOpen && <>{props.children}</>}</AnimatePresence>
    </motion.div>
  )
}

/**
 * Here are the components that get passed around to other components.
 */
const DrawerTrigger = (props: ButtonProps) => {
  const { openDrawer } = useDrawerContext()

  return <Button onPress={openDrawer} {...props} />
}

interface DrawerProps {
  children: React.ReactNode
  isOpen?: boolean
  withNotch?: boolean
  onOpenChange?: (isOpen: boolean) => void
}
const Drawer = ({ children, withNotch = true, isOpen: controlledIsOpen, onOpenChange }: DrawerProps) => {
  const [internalIsOpen, setInternalIsOpen] = React.useState(false)

  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen

  React.useEffect(() => {
    if (isControlled && onOpenChange) {
      onOpenChange(isOpen)
    }
  }, [isOpen, isControlled, onOpenChange])

  const openDrawer = () => {
    if (isControlled && onOpenChange) {
      onOpenChange(true)
    } else {
      setInternalIsOpen(true)
    }
  }

  const closeDrawer = () => {
    if (isControlled && onOpenChange) {
      onOpenChange(false)
    } else {
      setInternalIsOpen(false)
    }
  }

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer, withNotch }}>{children}</DrawerContext.Provider>
  )
}

const DrawerContent = ({ children, className, ...props }: React.ComponentProps<typeof DrawerContentPrimitive>) => {
  return (
    <DrawerContentPrimitive>
      <DrawerOverlayPrimitive {...props}>
        <Dialog className="mx-auto flex h-[calc(var(--visual-viewport-height)-4.5rem)] max-w-3xl flex-col justify-between overflow-y-auto px-4 pt-4 outline-none">
          {(values) => <>{typeof children === 'function' ? children(values) : children}</>}
        </Dialog>
      </DrawerOverlayPrimitive>
    </DrawerContentPrimitive>
  )
}

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-y-1 text-center sm:text-left', className)} {...props} />
)

const DrawerTitle = ({ className, ...props }: HeadingProps) => (
  <Heading slot="title" className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
)

const DrawerDescription = ModalDescription

const DrawerBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex-1 overflow-y-auto overflow-x-hidden py-4', className)} {...props} />
)

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex shrink-0 flex-col-reverse gap-2 sm:flex-row sm:justify-between [&_button:first-child:nth-last-child(1)]:w-full',
      className
    )}
    {...props}
  />
)

const DrawerClose = ModalClose

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
}
