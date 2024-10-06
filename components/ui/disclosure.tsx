"use client"

import * as React from "react"

import { IconChevronLeft } from "justd-icons"
import type {
  ButtonProps,
  DisclosureGroupProps as DisclosureGroupPrimitiveProps,
  DisclosurePanelProps,
  DisclosureProps
} from "react-aria-components"
import {
  Button,
  UNSTABLE_Disclosure as DisclosurePrimitive,
  UNSTABLE_DisclosureGroup as DisclosureGroupPrimitive,
  UNSTABLE_DisclosurePanel as DisclosurePanel
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn, cr, tm } from "./primitive"
import { TouchTarget } from "./touch-target"

interface DisclosureGroupProps extends DisclosureGroupPrimitiveProps {
  hideBorder?: boolean
  hideIndicator?: boolean
}

const DisclosureGroup = ({
  children,
  hideIndicator,
  hideBorder,
  className,
  ...props
}: DisclosureGroupProps) => {
  return (
    <DisclosureGroupPrimitive
      {...props}
      className={({ isDisabled }) =>
        cn([
          hideBorder
            ? "[&_[data-slot=accordion-item]]:border-none"
            : "[&_[data-slot=accordion-item]]:border-b",
          isDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer",
          hideIndicator
            ? "[&_[slot=trigger]>.triginr]:hidden"
            : "[&_[slot=trigger]>.triginr]:inline",
          className
        ])
      }
    >
      {(values) => (
        <div data-slot="accordion-item-content">
          {typeof children === "function" ? children(values) : children}
        </div>
      )}
    </DisclosureGroupPrimitive>
  )
}

const disclosureStyles = tv({
  base: "flex group relative w-full flex-col",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-75"
    },
    isExpanded: {
      true: "pb-3"
    }
  }
})

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <DisclosurePrimitive
      data-slot="accordion-item"
      {...props}
      className={cr(className, (className, renderProps) =>
        disclosureStyles({ ...renderProps, className })
      )}
    >
      {props.children}
    </DisclosurePrimitive>
  )
}

const accordionTriggerStyles = tv({
  base: [
    "flex flex-1 group rounded-lg sm:text-sm [&>[data-slot=icon]]:size-5 items-center gap-x-2 py-3 font-medium"
  ],
  variants: {
    isFocused: {
      true: "outline-none text-fg"
    },
    isOpen: {
      true: "text-fg"
    },
    isDisabled: {
      true: "opacity-50 cursor-default"
    }
  }
})

const Trigger = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      slot="trigger"
      className={cr(className, (className, renderProps) =>
        accordionTriggerStyles({
          ...renderProps,
          className
        })
      )}
    >
      {(values) => (
        <TouchTarget>
          {typeof props.children === "function" ? props.children(values) : props.children}
          <IconChevronLeft
            className={tm(
              "ml-auto triginr transition shrink-0 duration-300 group-data-[expanded]:-rotate-90"
            )}
          />
        </TouchTarget>
      )}
    </Button>
  )
}

const Panel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanel {...props} className={cn("sm:text-sm", className)}>
      {props.children}
    </DisclosurePanel>
  )
}

Disclosure.Trigger = Trigger
Disclosure.Panel = Panel

export { DisclosureGroup, Disclosure }
