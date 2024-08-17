"use client"

import React from "react"

import {
  Button,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  type TooltipProps as TooltipPrimitiveProps,
  TooltipTrigger
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cr } from "./primitive"

interface TooltipProps extends Omit<TooltipPrimitiveProps, "children"> {
  children: React.ReactNode
}

const tooltipStyles = tv({
  base: [
    "group rounded-lg [&_strong]:font-medium bg-fg border border-fg text-bg px-2 py-1.5 text-sm will-change-transform dark:shadow-none",
    "placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1"
  ],
  variants: {
    isEntering: {
      true: "animate-in fade-in"
    },
    isExiting: {
      true: "animate-in fade-in direction-reverse"
    }
  }
})

const Tooltip = (props: React.ComponentProps<typeof TooltipTrigger>) => (
  <TooltipTrigger {...props}>{props.children}</TooltipTrigger>
)

const Content = ({ children, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive
      {...props}
      offset={10}
      className={cr(props.className, (className, renderProps) =>
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
          className="fill-fg stroke-fg group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </TooltipPrimitive>
  )
}

Tooltip.Trigger = Button
Tooltip.Content = Content

export { Tooltip }
