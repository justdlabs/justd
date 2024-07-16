'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Dialog } from './dialog'
import { CloseButtonIndicator, Modal } from './modal'

interface SheetSubComponents {
    Close: typeof SheetClose
    Content: typeof SheetContent
    Description: typeof SheetDescription
    Footer: typeof SheetFooter
    Header: typeof SheetHeader
    Overlay: typeof SheetOverlay
    Title: typeof SheetTitle
    Trigger: typeof SheetTrigger
}

type SheetProps = VariantProps<typeof sheetVariants> & Primitive.DialogTriggerProps

const Sheet: React.FC<SheetProps> & SheetSubComponents = (props: SheetProps) => (
    <Primitive.DialogTrigger {...props}>{props.children}</Primitive.DialogTrigger>
)
const SheetTrigger = (props: Primitive.ButtonProps) => <Primitive.Button {...props} />
const SheetClose = Modal.Close
const SheetFooter = Modal.Footer
const SheetHeader = Modal.Header
const SheetTitle = Modal.Title
const SheetDescription = Modal.Description

const generateCompoundVariants = (sides: Array<'top' | 'bottom' | 'left' | 'right'>) => {
    return sides.map((side) => ({
        side,
        isStack: true,
        className:
            side === 'top'
                ? 'top-2 inset-x-2 rounded-lg border'
                : side === 'bottom'
                  ? 'bottom-2 inset-x-2 rounded-lg border'
                  : side === 'left'
                    ? 'left-2 inset-y-2 rounded-lg border'
                    : 'right-2 inset-y-2 rounded-lg border'
    }))
}

const sheetVariants = tv({
    base: 'fixed z-50 grid gap-4 bg-background text-foreground shadow-lg transition ease-in-out entering:duration-300 entering:animate-in exiting:duration-200 exiting:animate-out',
    variants: {
        side: {
            top: 'inset-x-0 top-0 rounded-b-2xl border-b entering:slide-in-from-top exiting:slide-out-to-top',
            bottom: 'inset-x-0 bottom-0 rounded-t-2xl border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom',
            left: 'inset-y-0 left-0 h-auto w-72 overflow-y-auto border-r entering:slide-in-from-left exiting:slide-out-to-left sm:w-3/4 sm:max-w-xs',
            right: 'inset-y-0 right-0 h-auto w-72 overflow-y-auto border-l entering:slide-in-from-right exiting:slide-out-to-right sm:w-3/4 sm:max-w-xs'
        },
        isStack: {
            true: '',
            false: ''
        }
    },
    compoundVariants: generateCompoundVariants(['top', 'bottom', 'left', 'right'])
})

const SheetOverlay = ({
    className,
    isDismissable = true,
    ...props
}: Primitive.ModalOverlayProps) => (
    <Primitive.ModalOverlay
        isDismissable={isDismissable}
        className={(values) =>
            cn(
                'fixed inset-0 z-50 bg-black/50 entering:animate-in entering:fade-in-0 exiting:duration-300 exiting:animate-out exiting:fade-out-0',
                typeof className === 'function' ? className(values) : className
            )
        }
        {...props}
    />
)

export interface SheetContentProps
    extends Omit<React.ComponentProps<typeof Primitive.Modal>, 'children'>,
        VariantProps<typeof sheetVariants> {
    children?: Primitive.DialogProps['children']
    role?: Primitive.DialogProps['role']
    closeButton?: boolean
    isStack?: boolean
}

const SheetContent = (props: SheetContentProps) => {
    const {
        className,
        children,
        side = 'right',
        role,
        closeButton = true,
        isStack = true
    } = props
    return (
        <Primitive.Modal
            className={cn(sheetVariants({ side, isStack }), className)}
            {...props}
        >
            <Dialog aria-label='Sheet' role={role} className='h-full outline-none'>
                {(values) => (
                    <>
                        {typeof children === 'function' ? children(values) : children}
                        {closeButton && (
                            <CloseButtonIndicator
                                className='right-2.5 top-2.5'
                                close={values.close}
                            />
                        )}
                    </>
                )}
            </Dialog>
        </Primitive.Modal>
    )
}

Sheet.Close = SheetClose
Sheet.Content = SheetContent
Sheet.Description = SheetDescription
Sheet.Footer = SheetFooter
Sheet.Header = SheetHeader
Sheet.Overlay = SheetOverlay
Sheet.Title = SheetTitle
Sheet.Trigger = SheetTrigger

export { Sheet }
