"use client"

import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

const trackStyles = tv({
  base: [
    "mr-2 h-5 w-8 bg-muted-fg/40 cursor-pointer rounded-full border-2 border-transparent transition duration-200",
    "group-focus:ring-4",
    "group-focus:ring-4 group-invalid:ring-danger/20",
    "group-disabled:cursor-default group-disabled:opacity-50"
  ],
  variants: {
    intent: {
      primary: "group-selected:bg-primary group-focus:ring-primary/20",
      secondary: "group-selected:bg-muted-fg group-focus:ring-muted-fg/20",
      success: "group-selected:bg-success group-focus:ring-success/20",
      danger: "group-selected:bg-danger group-focus:ring-danger/20",
      warning: "group-selected:bg-warning group-focus:ring-warning/20"
    }
  },
  defaultVariants: {
    intent: "primary"
  }
})

const switchStyles = tv({
  slots: {
    base: "group inline-flex touch-none lg:text-sm items-center",
    ball: "forced-colors:disabled:outline-[GrayText] group-selected:ml-3 group-selected:group-data-[pressed]:ml-2 group-pressed:w-5 block size-4 origin-right rounded-full bg-primary-fg shadow transition-all duration-200"
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
