'use client'

import { Heading as HeadingPrimitive, type HeadingProps } from 'react-aria-components'
import { cn } from './primitive'

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  return (
    <HeadingPrimitive
      level={level}
      className={cn('font-semibold text-zinc-950 dark:text-white sm:text-xl', className)}
      {...props}
    />
  )
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  return (
    <HeadingPrimitive
      level={level}
      {...props}
      className={cn(className, 'text-base/7 font-semibold text-zinc-950 dark:text-white sm:text-sm/6')}
    />
  )
}
