"use client"

import React from "react"

import { tv } from "tailwind-variants"

const containerStyles = tv({
  base: "mx-auto max-w-7xl",
  variants: {
    variant: {
      constrained: "container sm:px-6 lg:px-8",
      "padded-content": "px-4 sm:px-6 lg:px-8"
    }
  },
  defaultVariants: {
    variant: "padded-content"
  }
})

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "constrained" | "padded-content"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, ...props }, ref) => (
    <div className={containerStyles({ variant, className })} {...props} ref={ref} />
  )
)

Container.displayName = "Container"

export { Container }
