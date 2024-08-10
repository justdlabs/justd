'use client'

import React from 'react'

import {
  animate,
  AnimatePresence,
  type Inertia,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform
} from 'framer-motion'
import type { DialogProps } from 'react-aria-components'
import { Button, type ButtonProps, Modal, ModalOverlay } from 'react-aria-components'

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './dialog'
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
const drawerMargin = 40
const drawerRadius = 32

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

const ModalPrimitive = motion(Modal)
const ModalOverlayPrimitive = motion(ModalOverlay)

const DrawerOverlayPrimitive = (props: React.ComponentProps<typeof ModalOverlayPrimitive>) => {
  const { closeDrawer, withNotch } = useDrawerContext()
  const [contentHeight, setContentHeight] = React.useState(0)

  const h = Math.min(contentHeight + drawerMargin, window.innerHeight - drawerMargin)
  const y = useMotionValue(h)
  const bgOpacity = useTransform(y, [0, h], [0.5, 0])
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`

  const root = document.getElementsByTagName('main')[0] as HTMLElement
  const bodyBorderRadius = useTransform(y, [0, h], [drawerRadius, 0])

  useMotionValueEvent(bodyBorderRadius, 'change', (v) => (root.style.borderRadius = `${v}px`))

  return (
    <>
      <ModalOverlayPrimitive
        isOpen
        onOpenChange={closeDrawer}
        className="fixed inset-0 z-50"
        style={{ backgroundColor: bg as any }}
      >
        <motion.section
          aria-hidden
          onTap={closeDrawer}
          className="fixed inset-0"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1 },
            collapsed: { opacity: 0 }
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        />
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
            top: 'auto',
            height: contentHeight > 0 ? `${contentHeight + drawerMargin}px` : 'auto',
            maxHeight: `calc(100% - ${drawerMargin}px)`
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: h }}
          onDragEnd={(_e, { offset, velocity }) => {
            if (offset.y > h * 0.5 || velocity.y > 10) {
              closeDrawer()
            } else {
              animate(y, 0, { ...inertiaTransition, min: 0, max: 0 })
            }
          }}
          {...props}
        >
          <>
            {withNotch && <div className="notch mx-auto mt-2 h-1.5 w-10 rounded-full bg-fg/20" />}
            <div
              ref={(el) => {
                if (el) {
                  const resizeObserver = new ResizeObserver((entries) => {
                    for (const entry of entries) {
                      setContentHeight(entry.contentRect.height)
                    }
                  })
                  resizeObserver.observe(el)
                  return () => resizeObserver.disconnect()
                }
              }}
            >
              {props.children as React.ReactNode}
            </div>
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
  const bodyBorderRadius = useTransform(y, [0, h], [drawerRadius, 0])
  return (
    <motion.div
      style={{
        borderRadius: bodyBorderRadius,
        transformOrigin: 'center 0'
      }}
    >
      <AnimatePresence>{isOpen && <>{props.children}</>}</AnimatePresence>
    </motion.div>
  )
}

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

const Drawer = ({
  children,
  withNotch = true,
  isOpen: controlledIsOpen,
  onOpenChange
}: DrawerProps) => {
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
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer, withNotch }}>
      {children}
    </DrawerContext.Provider>
  )
}

const DrawerContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DrawerContentPrimitive>) => {
  return (
    <DrawerContentPrimitive>
      <DrawerOverlayPrimitive {...props}>
        <Dialog>
          {(values) => <>{typeof children === 'function' ? children(values) : children}</>}
        </Dialog>
      </DrawerOverlayPrimitive>
    </DrawerContentPrimitive>
  )
}

const DrawerHeader = DialogHeader
const DrawerTitle = DialogTitle
const DrawerDescription = DialogDescription
const DrawerBody = DialogBody
const DrawerFooter = DialogFooter

const DrawerClose = (props: React.ComponentProps<typeof DialogClose>) => {
  return <DialogClose shape="circle" {...props} />
}

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
