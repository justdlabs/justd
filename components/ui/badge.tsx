'use client'

import React from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const badgeIntents = {
  primary:
    'ring-primary-300 dark:ring-primary-400/20 bg-primary-500/15 text-primary-700 hover:bg-primary-500/25 dark:text-primary-400 dark:hover:bg-primary-500/25',
  secondary:
    'ring-zinc-300 dark:ring-zinc-400/20 bg-zinc-600/10 text-zinc-700 hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10',
  success:
    'ring-emerald-300 dark:ring-emerald-400/20 bg-emerald-400/20 text-emerald-700 hover:bg-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:bg-emerald-400/15',
  info: 'ring-lime-300 dark:ring-lime-400/20 bg-lime-500/15 text-lime-700 hover:bg-lime-500/25 dark:bg-lime-500/10 dark:text-lime-400 dark:hover:bg-lime-500/20',
  warning:
    'ring-amber-300 dark:ring-amber-400/20 bg-amber-400/20 text-amber-700 hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400/15',
  danger:
    'ring-red-300 dark:ring-red-400/20 bg-red-500/15 text-red-700 hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20',
  light:
    'ring-zinc-300 dark:ring-white bg-white hover:bg-zinc-100 dark:hover:bg-zinc-200 dark:ring-inset text-zinc-900 dark:text-zinc-900',
  dark: 'bg-zinc-800 hover:bg-zinc-800/90 ring-inset ring-zinc-800 text-white dark:ring-zinc-600',
  'light/dark':
    'bg-white ring-zinc-200 text-zinc-900 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80 dark:ring-zinc-600'
}

const badgeStyles = tv({
  base: 'inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 font-medium ring-1 ring-white/10 dark:ring-inset forced-colors:outline [&_svg]:size-3.5',
  variants: {
    intent: { ...badgeIntents },
    shape: { square: 'rounded-md px-1.5', circle: 'px-2 rounded-full' }
  },
  defaultVariants: {
    intent: 'primary',
    shape: 'square'
  }
})

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeStyles> {
  className?: string
  children: React.ReactNode
}

function Badge({ children, intent, shape, className, ...props }: BadgeProps) {
  return (
    <span {...props} className={badgeStyles({ intent, shape, className })}>
      {children}
    </span>
  )
}

export { Badge, badgeIntents, badgeStyles }
