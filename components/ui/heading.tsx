'use client'

import { isIos } from '@/components/ui/primitive'
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
  }
})
type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'h4'
>

interface HeadingProps extends HeadingType {
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  className?: string | undefined
}

const Heading = ({ className, tracking = 'normal', level = 1, ...props }: HeadingProps) => {
  const Element: `h${typeof level}` = `h${level}`
  return (
    <Element
      className={headingStyles({
        level,
        tracking,
        className: isIos() ? 'font-medium' : className
      })}
      {...props}
    />
  )
}

export { Heading, type HeadingProps }
