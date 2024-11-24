"use client"

import React from "react"

import { tv, type VariantProps } from "tailwind-variants"

const badgeIntents = {
  primary:
    "bg-primary/17 dark:bg-primary/20 text-primary dark:text-primary group-data-hovered:bg-primary/18 dark:group-data-hovered:bg-primary/25",
  secondary:
    "bg-secondary group-data-hovered:bg-muted dark:bg-secondary dark:group-data-hovered:bg-muted text-secondary-fg",
  success:
    "bg-emerald-500/15 text-emerald-700 group-data-hovered:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-hovered:bg-emerald-500/20",
  info: "bg-info/17 dark:bg-info/15 text-info group-data-hovered:bg-info/23 dark:group-data-hovered:bg-info/23",
  warning:
    "bg-warning/10 dark:bg-warning/15 text-warning-fg dark:text-warning group-data-hovered:bg-warning/15 dark:group-data-hovered:bg-warning/20",
  danger:
    "bg-danger/10 dark:bg-danger/15 text-danger group-data-hovered:bg-danger/15 dark:group-data-hovered:bg-danger/20"
}
const badgeShapes = {
  square: "rounded-md px-1.5",
  circle: "px-2 rounded-full"
}
const badgeStyles = tv({
  base: "inline-flex items-center gap-x-1.5 py-0.5 text-xs/5 font-medium forced-colors:outline **:data-[slot=icon]:size-3",
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
