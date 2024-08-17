"use client"

import type { ToggleButtonProps } from "react-aria-components"
import { ToggleButton as ToggleButtonPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

import { type ButtonProps } from "./button"
import { cr, focusButtonStyles } from "./primitive"

const toggleStyles = tv({
  extend: focusButtonStyles,
  base: [
    "inline-flex items-center bg-transparent justify-center border border-transparent rounded-lg text-sm font-medium ring-offset-bg transition-colors",
    "hover:bg-muted hover:text-muted-fg"
  ],
  variants: {
    isDisabled: {
      true: "opacity-50 cursor-default forced-colors:border-[GrayText]"
    },
    appearance: {
      plain: "selected:bg-secondary selected:text-secondary-fg",
      solid:
        "bg-white border-border hover:border-primary selected:border-primary hover:bg-primary hover:text-primary-fg text-zinc-900 selected:bg-primary selected:text-primary-fg",
      outline:
        "border-border selected:bg-secondary selected:backdrop-blur-sm selected:text-secondary-fg hover:bg-secondary hover:text-secondary-fg"
    },
    size: {
      medium: "h-10 px-3",
      small: "h-9 px-2.5",
      large: "h-11 px-5",
      "square-petite": "size-9 shrink-0"
    },
    shape: {
      square: "rounded-lg",
      circle: "rounded-full"
    }
  },
  defaultVariants: {
    size: "small",
    shape: "square"
  }
})

interface ToggleProps extends ToggleButtonProps {
  appearance?: ButtonProps["appearance"]
  size?: "small" | "medium" | "large" | "square-petite"
  shape?: ButtonProps["shape"]
}

const Toggle = ({ className, ...props }: ToggleProps) => {
  return (
    <ToggleButtonPrimitive
      {...props}
      className={cr(className, (className, renderProps) =>
        toggleStyles({
          ...renderProps,
          appearance: props.appearance,
          size: props.size,
          shape: props.shape,
          className
        })
      )}
    />
  )
}

export { Toggle, toggleStyles, type ToggleProps }
