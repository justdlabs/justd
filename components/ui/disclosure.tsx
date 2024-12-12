"use client"

import { IconChevronLeft } from "justd-icons"
import type {
  ButtonProps,
  DisclosureGroupProps as AccordionProps,
  DisclosurePanelProps,
  DisclosureProps
} from "react-aria-components"
import {
  Button,
  composeRenderProps,
  Disclosure as Collapsible,
  DisclosureGroup as Accordion,
  DisclosurePanel as CollapsiblePanel,
  Heading
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "./primitive"

const DisclosureGroup = ({ children, className, ...props }: AccordionProps) => {
  return (
    <Accordion
      data-slot="disclosure-group"
      {...props}
      className={({ isDisabled }) =>
        cn(isDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer", "peer", className)
      }
    >
      {(values) => (
        <div data-slot="disclosure-content">{typeof children === "function" ? children(values) : children}</div>
      )}
    </Accordion>
  )
}

const disclosure = tv({
  base: ["peer border-b border-border min-w-60 w-full group/disclosure"],
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-70"
    }
  }
})

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <Collapsible
      data-slot="disclosure"
      {...props}
      className={composeRenderProps(className, (className, renderProps) => disclosure({ ...renderProps, className }))}
    >
      {props.children}
    </Collapsible>
  )
}

const disclosureTrigger = tv({
  base: [
    "flex items-center gap-x-2 group/trigger [&[aria-expanded=true]_[data-slot=chevron]]:-rotate-90 **:data-[slot=chevron]:size-5 **:data-[slot=chevron]:size-5 **:data-[slot=icon]:shrink-0 sm:text-sm **:data-[slot=icon]:-mx-0.5 **:data-[slot=icon]:text-muted-fg justify-between py-3 **:[span]:*:data-[slot=icon]:mr-1 **:[span]:flex **:[span]:items-center **:[span]:gap-x-1 w-full text-left font-medium"
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
    <Heading>
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
            <IconChevronLeft
              data-slot="chevron"
              className="internal-chevron ml-auto size-4 shrink-0 transition shrink-0 duration-300"
            />
          </>
        )}
      </Button>
    </Heading>
  )
}

const DisclosurePanel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <CollapsiblePanel
      data-slot="disclosure-panel"
      {...props}
      className={cn(
        "overflow-hidden text-muted-fg text-sm transition-all has-data-[slot=disclosure-group]:**:[button]:px-4",
        "**:data-[slot=disclosure-group]:border-t **:data-[slot=disclosure-group]:**:[.internal-chevron]:hidden",
        className
      )}
    >
      <div
        data-slot="disclosure-panel-content"
        className={cn(
          "pt-0 [&:has([data-slot=disclosure-group])_&]:px-11 not-has-data-[slot=disclosure-group]:group-data-expanded/disclosure:pb-3",
          className
        )}
      >
        {props.children}
      </div>
    </CollapsiblePanel>
  )
}

export { DisclosureGroup, Disclosure, DisclosurePanel, DisclosureTrigger }
