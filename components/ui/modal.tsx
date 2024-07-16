'use client'

import * as React from 'react'

import { cn, useMediaQuery } from '@/lib/utils'
import { X } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Button } from './button'
import { Dialog } from './dialog'

export const modalVariants = tv({
    base: [
        'fixed bottom-0 left-[50%] top-auto z-50 grid w-full max-w-full translate-x-[-50%] gap-4 rounded-t-xl border border-b-transparent bg-background p-2 shadow-lg outline-none sm:bottom-auto sm:top-[40%] sm:translate-y-[-50%] sm:rounded-xl sm:border-b-border',
        'entering:[transition-timing-function:ease-out] entering:animate-in entering:fade-in-0 entering:zoom-in-95 entering:slide-in-from-top-1/2 entering:slide-in-from-left-1/2',
        'exiting:[transition-timing-function:ease] exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95 exiting:slide-out-to-top-1/2 exiting:slide-out-to-left-1/2'
    ],
    variants: {
        size: {
            xs: 'sm:max-w-xs',
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
            '3xl': 'sm:max-w-3xl',
            '4xl': 'sm:max-w-4xl',
            '5xl': 'sm:max-w-5xl'
        }
    },
    defaultVariants: {
        size: 'lg'
    }
})

interface ModalSubComponents {
    Body: typeof ModalBody
    Close: typeof ModalClose
    Content: typeof ModalContent
    Description: typeof ModalDescription
    Footer: typeof ModalFooter
    Header: typeof ModalHeader
    Overlay: typeof ModalOverlay
    Title: typeof ModalTitle
    Trigger: typeof ModalTrigger
}

const Modal: React.FC<Primitive.DialogTriggerProps> & ModalSubComponents = (props) => (
    <Primitive.DialogTrigger {...props} />
)

const ModalTrigger = Primitive.Button

const ModalOverlayContext = React.createContext<{
    isDismissable?: boolean
}>({})

const ModalOverlay = ({
    className,
    isDismissable = true,
    ...props
}: Primitive.ModalOverlayProps) => (
    <ModalOverlayContext.Provider value={{ isDismissable: isDismissable }}>
        <Primitive.ModalOverlay
            isDismissable={isDismissable}
            className={(values) =>
                cn(
                    'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm entering:animate-in entering:fade-in-0 exiting:animate-in exiting:fade-out-0',
                    typeof className === 'function' ? className(values) : className
                )
            }
            {...props}
        />
    </ModalOverlayContext.Provider>
)

export interface ModalContentProps
    extends Omit<React.ComponentProps<typeof Primitive.Modal>, 'children'>,
        VariantProps<typeof modalVariants> {
    children?: Primitive.DialogProps['children']
    role?: Primitive.DialogProps['role']
    closeButton?: boolean
    className?: string
}

interface CloseButtonIndicatorProps {
    desktop?: boolean
    className?: string
    close: () => void
    dismissable?: boolean | undefined
}

const CloseButtonIndicator = ({ className, ...props }: CloseButtonIndicatorProps) => {
    return (
        <Button
            variant='ghost'
            size='icon'
            aria-label='Close'
            autoFocus={!props.desktop}
            onPress={props.close}
            className={cn(
                'close absolute right-1 top-1 z-50 size-6',
                className,
                props.dismissable === false && 'hidden'
            )}
        >
            <X className='size-4' />
        </Button>
    )
}

const ModalContent = ({
    className,
    children,
    size,
    role,
    closeButton = true,
    ...props
}: ModalContentProps) => {
    const { isDismissable } = React.useContext(ModalOverlayContext)
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    return (
        <Primitive.Modal className={modalVariants({ size, className })} {...props}>
            <Dialog role={role}>
                {(values) => (
                    <>
                        {typeof children === 'function' ? children(values) : children}
                        {closeButton && (
                            <CloseButtonIndicator
                                desktop={isDesktop}
                                close={values.close}
                                dismissable={isDismissable}
                            />
                        )}
                    </>
                )}
            </Dialog>
        </Primitive.Modal>
    )
}

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'mb-6 flex flex-col gap-y-0.5 pr-1 text-center sm:pr-0 sm:text-left',
            className
        )}
        {...props}
    />
)

interface ModalCloseProps extends Primitive.ButtonProps {}

const ModalClose = ({ className, ...props }: ModalCloseProps) => {
    const state = React.useContext(Primitive.OverlayTriggerStateContext)!
    return <Button variant='outline' onPress={() => state.close()} {...props} />
}

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('pb-6', className)} {...props} />
)

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col-reverse gap-2 sm:flex-row sm:justify-between',
            className
        )}
        {...props}
    />
)

const ModalTitle = ({ className, ...props }: Primitive.HeadingProps) => (
    <Primitive.Heading
        slot='title'
        className={cn(
            'text-xl font-semibold leading-none tracking-tight lg:text-lg',
            className
        )}
        {...props}
    />
)

const ModalDescription = ({ className, ...props }: Primitive.HeadingProps) => (
    <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)

Modal.Body = ModalBody
Modal.Close = ModalClose
Modal.Content = ModalContent
Modal.Description = ModalDescription
Modal.Footer = ModalFooter
Modal.Header = ModalHeader
Modal.Overlay = ModalOverlay
Modal.Title = ModalTitle
Modal.Trigger = ModalTrigger

export { CloseButtonIndicator, Modal }
