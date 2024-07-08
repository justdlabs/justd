'use client'

import {
  composeRenderProps,
  ToggleButton as ToggleButtonPrimitive,
  type ToggleButtonProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from './primitive'

const toggleButtonStyles = tv({
  extend: focusRing,
  base: [
    'inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium ring-offset-background transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 pressed:outline-none disabled:pointer-events-none disabled:opacity-50 sm:text-sm',
    '[&_svg]:size-4'
  ],
  variants: {
    isSelected: {
      false: 'hover:bg-secondary pressed:bg-tertiary forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText]',
      true: 'bg-secondary hover:bg-secondary/80 pressed:bg-secondary/70 forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText]'
    },
    isDisabled: {
      true: 'border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:border-[GrayText] forced-colors:!bg-[ButtonFace] forced-colors:!text-[GrayText]'
    }
  }
})

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <ToggleButtonPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        toggleButtonStyles({ ...renderProps, className })
      )}
    />
  )
}
