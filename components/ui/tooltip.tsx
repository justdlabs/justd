'use client'

import React from 'react'

import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

export interface TooltipProps extends Omit<Primitive.TooltipProps, 'children'> {
    children: React.ReactNode
}

const tooltipStyles = tv({
    base: [
        'group rounded-lg border bg-background px-1.5 py-1 text-sm text-foreground will-change-transform dark:shadow-none',
        // Placement
        'placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
    ],
    variants: {
        isEntering: { true: 'animate-in fade-in' },
        isExiting: { true: 'animate-in fade-in direction-reverse' }
    }
})

const Tooltip = (props: TooltipProps) => {
    return <Primitive.TooltipTrigger {...props} />
}

const TooltipTrigger = Primitive.Button

const TooltipContent = ({ children, ...props }: TooltipProps) => {
    return (
        <Primitive.Tooltip
            {...props}
            offset={10}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tooltipStyles({
                        ...renderProps,
                        className
                    })
            )}
        >
            <Primitive.OverlayArrow>
                <svg
                    width={8}
                    height={8}
                    viewBox='0 0 8 8'
                    className='fill-popover stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                >
                    <path d='M0 0 L4 4 L8 0' />
                </svg>
            </Primitive.OverlayArrow>
            {children}
        </Primitive.Tooltip>
    )
}

Tooltip.Content = TooltipContent
Tooltip.Trigger = TooltipTrigger

export { Tooltip }
