"use client"

import * as React from "react"

import { IconChevronDown } from "justd-icons"
import type {
  ButtonProps,
  DisclosureGroupProps as DisclosureGroupPrimitiveProps,
  DisclosurePanelProps,
  DisclosureProps
} from "react-aria-components"
import {
  Button,
  composeRenderProps,
  Disclosure as DisclosurePrimitive,
  DisclosureGroup as DisclosureGroupPrimitive,
  DisclosurePanel as DisclosurePanelPrimitive
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "./primitive"

const DisclosureGroup = ({ children, className, ...props }: DisclosureGroupPrimitiveProps) => {
  return (
    <DisclosureGroupPrimitive
      data-slot="disclosure-group"
      {...props}
      className={({ isDisabled }) =>
        cn(isDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer", "peer", className)
      }
    >
      {(values) => (
        <div data-slot="disclosure-content">{typeof children === "function" ? children(values) : children}</div>
      )}
    </DisclosureGroupPrimitive>
  )
}

const disclosureStyles = tv({
  base: ["peer border-b border-border min-w-60 w-full group"],
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-70"
    }
  }
})

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <DisclosurePrimitive
      data-slot="disclosure"
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        disclosureStyles({ ...renderProps, className })
      )}
    >
      {props.children}
    </DisclosurePrimitive>
  )
}

const disclosureTrigger = tv({
  base: [
    "flex items-center **:data-[slot=chevron]:size-6 lg:text-sm **:data-[slot=icon]:mr-2 **:data-[slot=icon]:text-muted-fg justify-between py-3 **:[span]:*:data-[slot=icon]:mr-1 **:[span]:flex **:[span]:items-center **:[span]:gap-x-1 w-full text-left font-medium"
  ],
  variants: {
    isFocused: {
      true: "outline-hidden text-fg"
    },
    isOpen: {
      true: "text-fg"
    },
    isDisabled: {
      true: "opacity-50 cursor-default"
    }
  }
})

const DisclosureTrigger = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      slot="trigger"
      className={composeRenderProps(className, (className, renderProps) =>
        disclosureTrigger({
          ...renderProps,
          className
        })
      )}
    >
      {(values) => (
        <>
          {typeof props.children === "function" ? props.children(values) : props.children}
          <IconChevronDown
            data-slot="disclosure-chevron"
            className={cn("ml-auto transition shrink-0 duration-300 group-data-expanded:rotate-180")}
          />
        </>
      )}
    </Button>
  )
}

const DisclosurePanel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanelPrimitive
      data-slot="disclosure-panel"
      {...props}
      className={cn(
        "overflow-hidden text-muted-fg text-sm transition-all has-data-[slot=disclosure-group]:**:[button]:px-4",
        "**:data-[slot=disclosure-group]:border-t **:data-[slot=disclosure-group]:**:data-[slot=disclosure-chevron]:hidden",
        className
      )}
    >
      <div
        data-slot="disclosure-panel-content"
        className={cn(
          "pt-0 [&:has([data-slot=disclosure-group])_&]:px-11 not-has-data-[slot=disclosure-group]:group-data-expanded:pb-3",
          className
        )}
      >
        {props.children}
      </div>
    </DisclosurePanelPrimitive>
  )
}

export { DisclosureGroup, Disclosure, DisclosurePanel, DisclosureTrigger }
