'use client'

import { Separator as SeparatorPrimitive, type SeparatorProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const styles = tv({
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
      className={styles({
        orientation: props.orientation,
        className: props.className
      })}
    />
  )
}

export type { SeparatorProps }
