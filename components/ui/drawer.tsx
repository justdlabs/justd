'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import * as Framer from 'framer-motion'
import * as Primitive from 'react-aria-components'

import { Modal } from './modal'

const MotionModal = Framer.motion(Primitive.Modal)
const MotionModalOverlay = Framer.motion(Primitive.ModalOverlay)

const inertiaTransition: Framer.Inertia = {
    type: 'inertia',
    bounceStiffness: 300,
    bounceDamping: 40,
    timeConstant: 300
}

const staticTransition = {
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1]
}

const DRAWER_MARGIN = 34
const DRAWER_RADIUS = 12

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

const DrawerTrigger = (props: Primitive.ButtonProps) => {
    const { openDrawer } = useDrawerContext()

    return <Primitive.Button onPress={openDrawer} {...props} />
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

interface DrawerContentProps
    extends Omit<React.ComponentProps<typeof Primitive.Modal>, 'children'> {
    children?: Primitive.DialogProps['children']
}

const DrawerContent = ({ children, className, ...props }: DrawerContentProps) => {
    const { isOpen, closeDrawer, withNotch } = useDrawerContext()

    const h = window.innerHeight - DRAWER_MARGIN
    const y = Framer.useMotionValue(h)
    const bgOpacity = Framer.useTransform(y, [0, h], [0.5, 0])
    const bg = Framer.useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`

    const bodyScale = Framer.useTransform(
        y,
        [0, h],
        [(window.innerWidth - DRAWER_MARGIN) / window.innerWidth, 1]
    )
    const bodyTranslate = Framer.useTransform(
        y,
        [0, h],
        [DRAWER_MARGIN - DRAWER_RADIUS, 0]
    )
    const bodyBorderRadius = Framer.useTransform(y, [0, h], [DRAWER_RADIUS, 0])
    return (
        <Framer.motion.div
            style={{
                scale: bodyScale,
                borderRadius: bodyBorderRadius,
                y: bodyTranslate,
                transformOrigin: 'center 0'
            }}
        >
            <Framer.AnimatePresence>
                {isOpen && (
                    <MotionModalOverlay
                        isOpen // Force the modal to be open when AnimatePresence renders it.
                        onOpenChange={closeDrawer}
                        className='fixed inset-0 z-50'
                        style={{ backgroundColor: bg as any }}
                    >
                        <MotionModal
                            className={cn(
                                'absolute bottom-0 w-full rounded-t-2xl bg-background shadow-lg ring-1 ring-foreground/20',
                                className
                            )}
                            initial={{ y: h }}
                            animate={{ y: 0 }}
                            exit={{ y: h }}
                            transition={staticTransition}
                            style={{
                                y,
                                top: DRAWER_MARGIN,
                                paddingBottom: window.screen.height // Extra padding at the bottom to account for rubber band scrolling.
                            }}
                            drag='y'
                            dragConstraints={{ top: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (
                                    offset.y > window.innerHeight * 0.75 ||
                                    velocity.y > 10
                                ) {
                                    closeDrawer()
                                } else {
                                    Framer.animate(y, 0, {
                                        ...inertiaTransition,
                                        min: 0,
                                        max: 0
                                    })
                                }
                            }}
                            {...props}
                        >
                            {/* drag affordance / notch */}
                            {withNotch && (
                                <div className='notch mx-auto mt-2 h-1.5 w-10 rounded-full bg-foreground/20' />
                            )}
                            <Primitive.Dialog className='mx-auto flex h-[calc(var(--visual-viewport-height)-4.5rem)] max-w-3xl flex-col justify-between overflow-y-auto px-4 pt-4 outline-none'>
                                {(values) => (
                                    <>
                                        {typeof children === 'function'
                                            ? children(values)
                                            : children}
                                    </>
                                )}
                            </Primitive.Dialog>
                        </MotionModal>
                    </MotionModalOverlay>
                )}
            </Framer.AnimatePresence>
        </Framer.motion.div>
    )
}

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('flex flex-col gap-y-1 text-center sm:text-left', className)}
        {...props}
    />
)

const DrawerBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('flex-1 overflow-y-auto overflow-x-hidden py-4', className)}
        {...props}
    />
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

const DrawerTitle = ({ className, ...props }: Primitive.HeadingProps) => (
    <Primitive.Heading
        slot='title'
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
    />
)

const DrawerDescription = Modal.Description
const DrawerClose = Modal.Close

Drawer.Trigger = DrawerTrigger
Drawer.Body = DrawerBody
Drawer.Close = DrawerClose
Drawer.Header = DrawerHeader
Drawer.Title = DrawerTitle
Drawer.Description = DrawerDescription
Drawer.Content = DrawerContent
Drawer.Footer = DrawerFooter

export { Drawer }
