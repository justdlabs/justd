'use client'

import * as React from 'react'

import { Separator as SeparatorPrimitive, type SeparatorProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const separatorStyles = tv({
  base: 'bg-muted forced-colors:bg-[ButtonBorder]',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

export function Separator(props: SeparatorProps) {
  return (
    <SeparatorPrimitive
      {...props}
      className={separatorStyles({
        orientation: props.orientation,
        className: props.className
      })}
    />
  )
}

export type { SeparatorProps }
