"use client"

import React from "react"

import { tv, type VariantProps } from "tailwind-variants"

const badgeIntents = {
  primary:
    "ring-primary/30 dark:ring-primary/50 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary hover:bg-primary/15 dark:hover:bg-primary/10",
  secondary: "bg-secondary/50 dark:bg-secondary/70 ring-secondary-fg/20 text-secondary-fg",
  success:
    "bg-emerald-500/15 text-emerald-700 ring-success/50 dark:ring-success/80 group-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
  info: "dark:ring-info/30 ring-info/80 bg-info/20 dark:bg-info/15 text-info-fg dark:text-info hover:bg-info/15 dark:hover:bg-info/10",
  warning:
    "dark:ring-warning/40 ring-warning/50 bg-warning/10 dark:bg-warning/15 text-warning-fg dark:text-warning hover:bg-warning/15 dark:hover:bg-warning/10",
  danger:
    "dark:ring-danger/30 ring-danger/40 bg-danger/10 dark:bg-danger/15 text-danger hover:bg-danger/15 dark:hover:bg-danger/10",
  light:
    "ring-border dark:ring-light bg-light hover:bg-secondary dark:hover:bg-fg/90 dark:ring-inset text-fg dark:text-bg",
  dark: "bg-dark hover:bg-dark/90 ring-inset ring-dark text-light dark:ring-border"
}
const badgeShapes = {
  square: "rounded-md px-1.5",
  circle: "px-2 rounded-full"
}
const badgeStyles = tv({
  base: "inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 ring-1 ring-white/10 font-medium dark:ring-inset forced-colors:outline [&_[data-slot=icon]]:size-3",
  variants: {
    intent: { ...badgeIntents },
    shape: { ...badgeShapes }
  },
  defaultVariants: {
    intent: "primary",
    shape: "square"
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
