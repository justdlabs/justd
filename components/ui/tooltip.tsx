'use client'

import React from 'react'

import {
  Button,
  composeRenderProps,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  type TooltipProps as TooltipPrimitiveProps,
  TooltipTrigger as TooltipTriggerPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

export interface TooltipProps extends Omit<TooltipPrimitiveProps, 'children'> {
  children: React.ReactNode
}

const tooltipStyles = tv({
  base: [
    'group rounded-lg border bg-tertiary px-1.5 py-1 text-sm text-tertiary-fg will-change-transform dark:shadow-none',
    // Placement
    'placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
  ],
  variants: {
    isEntering: {
      true: 'animate-in fade-in'
    },
    isExiting: {
      true: 'animate-in fade-in direction-reverse'
    }
  }
})

const TooltipTrigger = Button
const Tooltip = TooltipTriggerPrimitive

const TooltipContent = ({ children, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive
      {...props}
      offset={10}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tooltipStyles({
          ...renderProps,
          className
        })
      )}
    >
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          className="fill-tertiary stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </TooltipPrimitive>
  )
}

export { Tooltip, TooltipContent, TooltipTrigger }
