'use client'

import * as React from 'react'

import type { ToggleButtonProps } from 'react-aria-components'
import { ToggleButton as ToggleButtonPrimitive } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cr, focusButtonStyles } from './primitive'

const toggleStyles = tv({
  extend: focusButtonStyles,
  base: [
    'inline-flex relative items-center bg-transparent justify-center border border-transparent rounded-lg text-sm font-medium ring-offset-bg transition-colors',
    'hover:bg-secondary hover:text-secondary-fg'
  ],
  variants: {
    isDisabled: {
      true: 'opacity-50 cursor-default forced-colors:border-[GrayText]'
    },
    appearance: {
      plain: 'selected:bg-secondary selected:text-secondary-fg',
      solid:
        'bg-white border-border selected:border-primary hover:bg-white/95 hover:text-black text-black selected:bg-primary selected:text-primary-fg',
      outline:
        'border-border selected:bg-secondary selected:backdrop-blur-sm selected:text-secondary-fg hover:bg-secondary/50 hover:text-secondary-fg'
    },
    size: {
      small: 'h-9 px-3.5',
      medium: 'h-10 px-4',
      large: 'h-11 px-5',
      'square-petite': 'size-9 shrink-0'
    },
    shape: {
      square: 'rounded-lg',
      circle: 'rounded-full'
    }
  },
  defaultVariants: {
    size: 'small',
    shape: 'square'
  }
})

type ToggleProps = ToggleButtonProps & VariantProps<typeof toggleStyles>

const Toggle = ({ className, ...props }: ToggleProps) => {
  return (
    <ToggleButtonPrimitive
      {...props}
      className={cr(className, (className, renderProps) =>
        toggleStyles({
          ...renderProps,
          appearance: props.appearance,
          size: props.size,
          shape: props.shape,
          className
        })
      )}
    >
      {cr(props.children, (children) => (
        <>{children}</>
      ))}
    </ToggleButtonPrimitive>
  )
}

export { Toggle, toggleStyles, type ToggleProps }
