"use client"

import * as React from "react"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cr, focusButtonStyles } from "./primitive"

const buttonStyles = tv(
  {
    extend: focusButtonStyles,
    base: [
      "kbt32x before:absolute after:absolute box-border relative no-underline isolate inline-flex items-center justify-center gap-x-2 border font-medium",
      "forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
      "[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-1 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon]"
    ],
    variants: {
      intent: {
        primary: [
          "text-primary-fg [--btn-bg:theme(colors.primary.DEFAULT)] [--btn-border:theme(colors.primary.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "[--btn-icon:theme(colors.primary.fg/60%)] active:[--btn-icon:theme(colors.primary.fg/80%)] hover:[--btn-icon:theme(colors.primary.fg/80%)]"
        ],
        secondary: [
          "text-secondary-fg [--btn-bg:white] dark:[--btn-bg:theme(colors.secondary.DEFAULT)] [--btn-border:theme(colors.secondary.fg/10%)] [--btn-hover-overlay:theme(colors.secondary.fg/2.5%)] data-[active]:[--btn-border:theme(colors.secondary.fg/15%)] hover:[--btn-border:theme(colors.secondary.fg/15%)]",
          "[--btn-icon:theme(colors.muted.fg)] active:[--btn-icon:theme(colors.fg)] hover:[--btn-icon:theme(colors.fg)]"
        ],
        success: [
          "text-success-fg [--btn-bg:theme(colors.success.DEFAULT)] [--btn-border:theme(colors.success.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "[--btn-icon:theme(colors.white/60%)] active:[--btn-icon:theme(colors.white/80%)] hover:[--btn-icon:theme(colors.white/80%)]"
        ],
        "light/dark": [
          "text-bg [--btn-bg:theme(colors.dark)] [--btn-border:theme(colors.dark/90%)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "dark:[--btn-bg:white] dark:[--btn-hover-overlay:theme(colors.dark/5%)]",
          "[--btn-icon:theme(colors.muted.fg)] active:[--btn-icon:theme(colors.bg/85%)] hover:[--btn-icon:theme(colors.bg/85%)]"
        ],
        dark: [
          "text-light [--btn-bg:theme(colors.dark)] [--btn-border:theme(colors.dark)] [--btn-hover-overlay:theme(colors.light/2.5%)]",
          "[--btn-icon:theme(colors.light/60%)] active:[--btn-icon:theme(colors.light/80%)] hover:[--btn-icon:theme(colors.light/80%)]"
        ],
        light: [
          "text-dark [--btn-bg:white] [--btn-border:theme(colors.dark/10%)] [--btn-hover-overlay:theme(colors.dark/2.5%)] active:[--btn-border:theme(colors.dark/15%)] hover:[--btn-border:theme(colors.dark/15%)]",
          "[--btn-icon:theme(colors.dark/60%)] active:[--btn-icon:theme(colors.dark/80%)] hover:[--btn-icon:theme(colors.dark/80%)]"
        ],
        info: [
          "text-info-fg [--btn-bg:theme(colors.info.DEFAULT)] [--btn-border:theme(colors.info.DEFAULT/80%)] [--btn-hover-overlay:theme(colors.white/25%)]",
          "[--btn-icon:theme(colors.info.fg/60%)] active:[--btn-icon:theme(colors.info.fg/80%)] hover:[--btn-icon:theme(colors.info.fg/80%)]"
        ],
        warning: [
          "text-warning-fg [--btn-bg:theme(colors.warning.DEFAULT)] [--btn-border:theme(colors.warning.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "[--btn-icon:theme(colors.warning.fg/60%)] active:[--btn-icon:theme(colors.warning.fg/80%)] hover:[--btn-icon:theme(colors.warning.fg/80%)]"
        ],
        danger: [
          "text-white [--btn-bg:theme(colors.danger.DEFAULT)] [--btn-border:theme(colors.danger.DEFAULT)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "[--btn-icon:theme(colors.white/60%)] active:[--btn-icon:theme(colors.white/80%)] hover:[--btn-icon:theme(colors.white/80%)]"
        ]
      },
      appearance: {
        solid: [
          "border-transparent bg-[--btn-border]",
          "before:inset-0 before:-z-10 before:bg-[--btn-bg] before:shadow before:data-[disabled]:shadow-none",
          "after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-[--btn-hover-overlay] after:hover:bg-[--btn-hover-overlay] after:data-[disabled]:shadow-none after:inset-0 after:-z-10",
          "dark:after:-inset-px dark:before:hidden dark:border-white/5 dark:bg-[--btn-bg]"
        ],
        outline: [
          "border-border text-fg [--btn-icon:theme(colors.muted.fg)]",
          "hover:[--btn-icon:theme(colors.fg)] hover:bg-secondary/90",
          "active:bg-secondary/90 active:[--btn-icon:theme(colors.fg)]"
        ],
        plain: [
          "border-transparent text-fg [--btn-icon:theme(colors.muted.fg)]",
          "pressed:bg-secondary/90",
          "active:[--btn-icon:theme(colors.fg)] active:bg-secondary/90",
          "hover:[--btn-icon:theme(colors.fg)] hover:bg-secondary/90"
        ]
      },
      size: {
        "extra-small":
          "h-8 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.1)-1px)] text-xs/4 lg:text-[0.800rem]/4",
        small:
          "h-9 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-sm/5 lg:text-sm/5",
        medium:
          "h-10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.2)-1px)] text-base lg:text-sm/6",
        large:
          "h-10 sm:h-11 px-[calc(theme(spacing.4)-1px)] sm:px-[calc(theme(spacing.5)-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base lg:text-base/7 sm:[&>[data-slot=icon]]:size-5",
        "square-petite": "size-9 shrink-0 [&_[data-slot=icon]]:text-current"
      },
      shape: {
        square:
          "rounded-lg before:rounded-[calc(theme(borderRadius.lg)-1px)] after:rounded-[calc(theme(borderRadius.lg)-1px)] dark:after:rounded-lg",
        circle:
          "rounded-[9999px] before:rounded-[9998px] after:rounded-[9998px] dark:after:rounded-[9999px]"
      },
      isDisabled: {
        false: "forced-colors:disabled:text-[GrayText]",
        true: "cursor-default opacity-60 forced-colors:disabled:text-[GrayText]"
      }
    },
    defaultVariants: {
      intent: "primary",
      appearance: "solid",
      size: "medium",
      shape: "square"
    }
  },
  {
    responsiveVariants: ["sm", "lg"]
  }
)

interface ButtonProps extends ButtonPrimitiveProps {
  intent?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light/dark"
    | "success"
    | "light"
    | "dark"
  size?: "medium" | "large" | "square-petite" | "extra-small" | "small"
  shape?: "square" | "circle"
  appearance?: "solid" | "outline" | "plain"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, children, appearance, size, shape, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        {...props}
        className={cr(className, (className, renderProps) =>
          buttonStyles({
            ...renderProps,
            intent,
            appearance,
            size,
            shape,
            className
          })
        )}
      >
        {cr(children, (children) => (
          <>
            <span
              className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            />
            {children}
          </>
        ))}
      </ButtonPrimitive>
    )
  }
)

Button.displayName = "Button"

export { Button, ButtonPrimitive, buttonStyles, type ButtonProps }
