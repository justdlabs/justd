"use client"

import { Heading as HeadingPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

const headingStyles = tv({
  base: "font-sans tracking-tight text-fg",
  variants: {
    level: {
      1: "font-bold text-2xl",
      2: "font-semibold text-lg sm:text-xl",
      3: "font-semibold text-base sm:text-lg",
      4: "font-medium text-base sm:text-sm"
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    }
  }
})
type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4"
>

interface HeadingProps extends HeadingType {
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"
  className?: string | undefined
}

const Heading = ({ className, tracking = "normal", level = 1, ...props }: HeadingProps) => {
  return (
    <HeadingPrimitive
      level={level}
      className={headingStyles({
        level,
        tracking,
        className
      })}
      {...props}
    />
  )
}

export { Heading, type HeadingProps }
