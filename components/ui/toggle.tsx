'use client'

import type { ToggleButtonProps } from 'react-aria-components'
import { composeRenderProps, ToggleButton as ToggleButtonPrimitive } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { focusButtonStyles } from './primitive'

const toggleStyles = tv({
  extend: focusButtonStyles,
  base: [
    'inline-flex items-center bg-transparent justify-center border border-transparent rounded-md text-sm font-medium ring-offset-background transition-colors',
    'hover:bg-muted hover:text-muted-fg'
  ],
  variants: {
    isDisabled: {
      true: 'opacity-50 cursor-pointer forced-colors:border-[GrayText]'
    },
    intent: {
      transparent: 'selected:bg-secondary selected:text-secondary-fg',
      'light/primary':
        'bg-white border-border hover:border-primary selected:border-primary hover:bg-primary hover:text-primary-fg text-zinc-900 selected:bg-primary selected:text-primary-fg',
      outline:
        'border-borer selected:bg-secondary/50 selected:backdrop-blur-sm selected:text-secondary-fg hover:bg-secondary/50 hover:text-secondary-fg'
    },
    size: {
      medium: 'h-10 px-3',
      small: 'h-9 px-2.5',
      large: 'h-11 px-5',
      'square-petite': 'size-9 shrink-0'
    },
    shape: {
      square: 'rounded-md',
      circle: 'rounded-full'
    }
  },
  defaultVariants: {
    intent: 'transparent',
    size: 'medium',
    shape: 'square'
  }
})

interface ToggleProps extends ToggleButtonProps {
  intent?: 'transparent' | 'outline' | 'light/primary'
  size?: 'small' | 'medium' | 'large' | 'square-petite'
  shape?: 'circle' | 'square'
}

const Toggle = (props: ToggleProps) => {
  return (
    <ToggleButtonPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        toggleStyles({ ...renderProps, intent: props.intent, size: props.size, shape: props.shape, className })
      )}
    />
  )
}

export { Toggle, toggleStyles }
