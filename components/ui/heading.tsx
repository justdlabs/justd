'use client'

import { Header as HeaderPrimitive, Heading as HeadingPrimitive, type HeadingProps } from 'react-aria-components'

import { cn } from './primitive'

const Header = HeaderPrimitive
const Heading = ({ className, level = 1, ...props }: HeadingProps) => {
  return (
    <HeadingPrimitive
      level={level}
      className={cn('font-medium text-zinc-950 dark:text-white sm:text-xl', className)}
      {...props}
    />
  )
}

const Subheading = ({ className, level = 2, ...props }: HeadingProps) => {
  return (
    <HeadingPrimitive
      level={level}
      {...props}
      className={cn('text-base/7 font-semibold text-fg sm:text-sm/6', className)}
    />
  )
}

export { Header, Heading, Subheading, type HeadingProps }
