import React from "react"

import { tv } from "tailwind-variants"

const skeletonStyles = tv({
  base: "animate-pulse shrink-0",
  variants: {
    intent: {
      muted: "bg-fg/20",
      lighter: "bg-fg/15"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-lg"
    }
  },
  defaultVariants: {
    intent: "muted",
    shape: "square"
  }
})

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "muted" | "lighter"
  shape?: "circle" | "square"
}
const Skeleton = ({ shape, intent, className, ...props }: SkeletonProps) => {
  return <div className={skeletonStyles({ shape, intent, className })} {...props} />
}

export { Skeleton }
