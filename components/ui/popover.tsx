'use client'

import React from 'react'

import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Modal } from './modal'

export interface PopoverProps extends Omit<Primitive.PopoverProps, 'children'> {
    showArrow?: boolean
    children: React.ReactNode
}

const styles = tv({
    base: 'max-w-xs rounded-xl border bg-background bg-clip-padding p-4 text-foreground shadow-lg dark:backdrop-blur-2xl dark:backdrop-saturate-200 sm:max-w-3xl',
    variants: {
        isEntering: {
            true: 'duration-200 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
        },
        isExiting: {
            true: 'duration-150 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1'
        }
    }
})

interface PopoverSubComponents {
    Content: typeof PopoverContent
    Trigger: typeof PopoverTrigger
    Close: typeof PopoverClose
    Overlay: typeof PopoverOverlay
    Footer: typeof PopoverFooter
    Header: typeof PopoverHeader
    Title: typeof PopoverTitle
    Description: typeof PopoverDescription
    Body: typeof PopoverBody
    Picker: typeof PopoverPicker
}

type PopoverComponent = React.FC<Primitive.DialogTriggerProps> & PopoverSubComponents

const Popover: PopoverComponent = (props: Primitive.DialogTriggerProps) => (
    <Primitive.DialogTrigger {...props} />
)
const PopoverTrigger = (props: Primitive.ButtonProps) => <Primitive.Button {...props} />
const PopoverClose = Modal.Close
const PopoverOverlay = Modal.Overlay
const PopoverFooter = Modal.Footer
const PopoverHeader = Modal.Header
const PopoverTitle = Modal.Title
const PopoverDescription = Modal.Description
const PopoverBody = Modal.Body

const PopoverContent = ({
    children,
    showArrow = true,
    className,
    ...props
}: PopoverProps) => {
    const popoverContext = Primitive.useSlottedContext(Primitive.PopoverContext)!
    const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
    let offset = showArrow ? 12 : 8
    offset = isSubmenu ? offset - 6 : offset
    return (
        <Primitive.Popover
            offset={offset}
            {...props}
            className={Primitive.composeRenderProps(className, (className, renderProps) =>
                styles({ ...renderProps, className })
            )}
        >
            {showArrow && (
                <Primitive.OverlayArrow className='group'>
                    <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        className='block fill-background stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                    >
                        <path d='M0 0 L6 6 L12 0' />
                    </svg>
                </Primitive.OverlayArrow>
            )}
            {children}
        </Primitive.Popover>
    )
}

const PopoverPicker = ({ showArrow = false, children, ...props }: PopoverProps) => {
    return (
        <PopoverContent
            showArrow={showArrow}
            className='max-h-72 min-w-[--trigger-width] p-0'
            {...props}
        >
            {children}
        </PopoverContent>
    )
}

Popover.Body = PopoverBody
Popover.Close = PopoverClose
Popover.Content = PopoverContent
Popover.Description = PopoverDescription
Popover.Footer = PopoverFooter
Popover.Header = PopoverHeader
Popover.Overlay = PopoverOverlay
Popover.Picker = PopoverPicker
Popover.Title = PopoverTitle
Popover.Trigger = PopoverTrigger

export { Popover }
