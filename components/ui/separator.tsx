"use client"

import * as React from "react"

import { Separator as SeparatorPrimitive, type SeparatorProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const separatorStyles = tv({
  base: "bg-border shrink-0 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
})

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      {...props}
      className={separatorStyles({
        orientation: props.orientation,
        className: className
      })}
    />
  )
}

export type { SeparatorProps }
