"use client"

import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

const trackStyles = tv({
  base: [
    "mr-2 h-5 w-8 bg-muted cursor-pointer rounded-full border-2 border-transparent transition duration-200",
    "group-data-focused:ring-4",
    "group-data-focused:ring-4 group-data-invalid:ring-danger/20",
    "group-data-disabled:cursor-default group-data-disabled:opacity-50"
  ],
  variants: {
    intent: {
      primary: "group-data-selected:bg-primary group-data-focused:ring-primary/20",
      secondary: "group-data-selected:bg-muted-fg group-data-focused:ring-muted-fg/20",
      success: "group-data-selected:bg-success group-data-focused:ring-success/20",
      danger: "group-data-selected:bg-danger group-data-focused:ring-danger/20",
      warning: "group-data-selected:bg-warning group-data-focused:ring-warning/20"
    }
  },
  defaultVariants: {
    intent: "primary"
  }
})

const switchStyles = tv({
  slots: {
    base: "group inline-flex touch-none lg:text-sm items-center",
    ball: "forced-colors:data-disabled:outline-[GrayText] group-data-selected:ml-3 group-data-selected:group-data-[pressed]:ml-2 group-data-pressed:w-5 block size-4 origin-right rounded-full bg-primary-fg shadow-sm transition-all duration-200"
  }
})

const { base, ball } = switchStyles()

interface SwitchProps extends SwitchPrimitiveProps, VariantProps<typeof trackStyles> {}

const Switch = ({ children, intent, className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      {...props}
      className={(values) =>
        base({ className: typeof className === "function" ? className(values) : className })
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {(values) => (
        <>
          <span className={trackStyles({ intent })}>
            <span className={ball()} />
          </span>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

export { Switch }
