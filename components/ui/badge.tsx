"use client"

import React from "react"

import { tv, type VariantProps } from "tailwind-variants"

const badgeIntents = {
  primary:
    "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary group-hover:bg-primary/15 dark:group-hover:bg-primary/20",
  secondary:
    "bg-secondary/90 group-hover:bg-secondary dark:bg-secondary/90 dark:group-hover:bg-secondary text-secondary-fg",
  success:
    "bg-emerald-500/15 text-emerald-700 group-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
  info: "bg-info/15 dark:bg-info/15 text-info group-hover:bg-info/15 dark:group-hover:bg-info/10",
  warning:
    "bg-warning/10 dark:bg-warning/15 text-warning-fg dark:text-warning group-hover:bg-warning/15 dark:group-hover:bg-warning/10",
  danger:
    "bg-danger/10 dark:bg-danger/15 text-danger group-hover:bg-danger/15 dark:group-hover:bg-danger/10"
}
const badgeShapes = {
  square: "rounded-md px-1.5",
  circle: "px-2 rounded-full"
}
const badgeStyles = tv({
  base: "inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 font-medium forced-colors:outline [&_[data-slot=icon]]:size-3",
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
