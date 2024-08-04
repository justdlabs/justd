'use client'

import { isIOS, isIPad, isMac } from '@react-aria/utils'
import {
  Heading as HeadingPrimitive,
  type HeadingProps as HeadingPrimitiveProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

const headingStyles = tv({
  base: 'font-sans tracking-tight text-fg',
  variants: {
    level: {
      1: 'font-bold text-lg',
      2: 'font-semibold text-base/6 sm:text-lg/5',
      3: 'font-semibold text-base/6 sm:text-base/6',
      4: 'font-medium text-base/6 sm:text-sm/6'
    },
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest'
    }
  },
  defaultVariants: {
    level: 2,
    tracking: 'normal'
  }
})

interface HeadingProps extends HeadingPrimitiveProps {
  level?: 1 | 2 | 3 | 4
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  className?: string
}

const Heading = ({ className, tracking = 'normal', level = 1, ...props }: HeadingProps) => {
  const isAppleDevice = isIOS() || isMac() || isIPad()
  const weight = level === 1 ? 'font-semibold' : 'font-medium'
  return (
    <HeadingPrimitive
      level={level}
      className={headingStyles({
        level,
        tracking,
        className: isAppleDevice ? weight : className
      })}
      {...props}
    />
  )
}

export { Heading, type HeadingProps }
