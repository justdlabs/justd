"use client"

import React from "react"

import { tv, type VariantProps } from "tailwind-variants"

const badgeIntents = {
  primary: [
    "bg-primary/10 dark:bg-primary/20 text-primary group-data-hover:bg-primary/25 dark:text-primary dark:group-data-hover:bg-primary/25"
  ],
  secondary: [
    "bg-secondary group-data-hovered:bg-muted dark:bg-secondary dark:group-data-hovered:bg-muted text-secondary-fg"
  ],
  success: [
    "bg-success/15 text-emerald-700 group-data-hover:bg-success/25 dark:bg-success/10 dark:text-emerald-400 dark:group-data-hover:bg-success/20"
  ],
  info: [
    "bg-info/10 dark:bg-info/20 text-info-fg group-data-hover:bg-info/25 dark:text-info dark:group-data-hover:bg-info/25"
  ],
  warning: [
    "bg-warning/10 dark:bg-warning/15 text-warning-fg group-data-hover:bg-warning/25 dark:text-warning dark:group-data-hover:bg-warning/25"
  ],
  danger: [
    "bg-danger/10 dark:bg-danger/15 text-danger group-data-hover:bg-danger/25 dark:text-danger dark:group-data-hover:bg-danger/20"
  ]
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

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeStyles> {
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
