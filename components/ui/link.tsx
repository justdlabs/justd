"use client"

import * as React from "react"

import { composeRenderProps, Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const linkStyles = tv({
  base: [
    "relative data-focus-visible:outline-2 outline-offset-2 outline-0 data-focused:outline-hidden outline-primary transition-colors",
    "forced-colors:outline-[Highlight] forced-colors:data-disabled:text-[GrayText] data-disabled:data-focus-visible:outline-0",
    "disabled:cursor-default data-disabled:opacity-60"
  ],
  variants: {
    intent: {
      unstyled: "text-current",
      primary: "text-primarydata-hovered:text-primary/80 forced-colors:data-disabled:text-[GrayText]",
      danger: "text-dangerdata-hovered:text-danger/80 forced-colors:data-disabled:text-[GrayText]",
      "lad/primary":
        "text-fgdata-hovered:text-primary dark:hover:text-primary/80 forced-colors:data-disabled:text-[GrayText]",
      secondary: "text-secondary-fgdata-hovered:text-secondary-fg/80"
    }
  },
  defaultVariants: {
    intent: "unstyled"
  }
})

interface LinkProps extends LinkPrimitiveProps {
  intent?: "primary" | "secondary" | "danger" | "lad/primary" | "unstyled"
}

const Link = ({ className, ...props }: LinkProps) => {
  return (
    <LinkPrimitive
      {...props}
      className={composeRenderProps(className, (className, ...renderProps) =>
        linkStyles({ ...renderProps, intent: props.intent, className })
      )}
    >
      {(values) => <>{typeof props.children === "function" ? props.children(values) : props.children}</>}
    </LinkPrimitive>
  )
}

export { Link, LinkPrimitive, type LinkPrimitiveProps, type LinkProps }
