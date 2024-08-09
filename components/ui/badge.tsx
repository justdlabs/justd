'use client'

import React from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const badgeIntents = {
  primary:
    'ring-primary/30 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 hover:bg-primary/15 dark:hover:bg-primary/10',
  secondary: 'bg-secondary/50 dark:bg-secondary/70 ring-secondary-fg/20 text-secondary-fg',
  success:
    'dark:ring-success/30 ring-success/40 bg-success/10 dark:bg-success/15 text-success hover:bg-success/15 dark:hover:bg-success/10',
  info: 'dark:ring-info/30 ring-info/80 bg-info/20 dark:bg-info/15 text-info-fg dark:text-info hover:bg-info/15 dark:hover:bg-info/10',
  warning:
    'dark:ring-warning/40 ring-warning/50 bg-warning/10 dark:bg-warning/15 text-warning-fg dark:text-warning hover:bg-warning/15 dark:hover:bg-warning/10',
  danger:
    'dark:ring-danger/30 ring-danger/40 bg-danger/10 dark:bg-danger/15 text-danger hover:bg-danger/15 dark:hover:bg-danger/10',
  light:
    'ring-zinc-300 dark:ring-white bg-white hover:bg-zinc-100 dark:hover:bg-zinc-200 dark:ring-inset text-zinc-900 dark:text-zinc-900',
  dark: 'bg-zinc-800 hover:bg-zinc-800/90 ring-inset ring-zinc-800 text-white dark:ring-zinc-600'
}
const badgeShapes = {
  square: 'rounded-md px-1.5',
  circle: 'px-2 rounded-full'
}
const badgeStyles = tv({
  base: 'inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 font-medium ring-1 ring-white/10 dark:ring-inset forced-colors:outline [&_[data-slot=icon]]:size-3',
  variants: {
    intent: { ...badgeIntents },
    shape: { ...badgeShapes }
  },
  defaultVariants: {
    intent: 'primary',
    shape: 'square'
  }
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {
  className?: string
  children: React.ReactNode
}

const Badge = ({ children, intent, shape, className, ...props }: BadgeProps) => {
  return (
    <span {...props} className={badgeStyles({ intent, shape, className })}>
      {children}
    </span>
  )
}

export { Badge, badgeIntents, badgeStyles, badgeShapes }
