"use client"

import React from "react"

import { IconX } from "justd-icons"
import type {
  TagGroupProps as TagGroupPrimitiveProps,
  TagListProps,
  TagProps as TagPrimitiveProps
} from "react-aria-components"
import {
  Button,
  Tag as TagPrimitive,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

import { badgeIntents, badgeShapes, badgeStyles } from "./badge"
import { Description, Label } from "./field"
import { cn, cr, ctr, focusStyles } from "./primitive"

const intents = {
  primary: {
    base: [
      badgeIntents.primary,
      "[&_[slot=remove]:hover]:bg-primary [&_[slot=remove]:hover]:text-primary-fg"
    ],
    selected: [
      "bg-primary dark:hover:bg-primary dark:bg-primary hover:bg-primary ring-primary ring-inset text-primary-fg dark:text-primary-fg hover:text-primary-fg",
      "[&_[slot=remove]:hover]:bg-primary-fg/80 [&_[slot=remove]:hover]:text-primary"
    ]
  },
  secondary: {
    base: [badgeIntents.secondary, "[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-bg"],
    selected: [
      "bg-fg ring-fg/50 text-bg dark:bg-fg/90 dark:text-secondary ring-inset",
      "[&_[slot=remove]:hover]:bg-bg [&_[slot=remove]:hover]:text-secondary-fg"
    ]
  },
  success: {
    base: [
      badgeIntents.success,
      "[&_[slot=remove]:hover]:bg-success [&_[slot=remove]:hover]:text-success-fg"
    ],
    selected: [
      "bg-success dark:bg-success ring-success ring-inset dark:text-success-fg dark:hover:bg-success hover:bg-success text-success-fg hover:text-success-fg",
      "[&_[slot=remove]:hover]:bg-success-fg/80 [&_[slot=remove]:hover]:text-success"
    ]
  },
  warning: {
    base: [
      badgeIntents.warning,
      "[&_[slot=remove]:hover]:bg-warning [&_[slot=remove]:hover]:text-warning-fg"
    ],
    selected: [
      "bg-warning dark:hover:bg-warning dark:bg-warning dark:text-bg hover:bg-warning text-warning-fg hover:text-warning-fg",
      "[&_[slot=remove]:hover]:bg-warning-fg/80 [&_[slot=remove]:hover]:text-warning"
    ]
  },
  danger: {
    base: [
      badgeIntents.danger,
      "[&_[slot=remove]:hover]:bg-danger [&_[slot=remove]:hover]:text-danger-fg"
    ],
    selected: [
      "bg-danger dark:bg-danger dark:hover:bg-danger/90 hover:bg-danger text-danger-fg ring-danger hover:text-danger-fg",
      "[&_[slot=remove]:hover]:bg-danger-fg/80 [&_[slot=remove]:hover]:text-danger"
    ]
  }
}

type RestrictedIntent = "primary" | "secondary"

type Intent = "primary" | "secondary" | "warning" | "danger" | "success"

type Shape = keyof typeof badgeShapes

type TagGroupContextValue = {
  intent: Intent
  shape: Shape
}

const TagGroupContext = React.createContext<TagGroupContextValue>({
  intent: "primary",
  shape: "square"
})

export interface TagGroupProps extends TagGroupPrimitiveProps {
  intent?: Intent
  shape?: "square" | "circle"
  errorMessage?: string
  label?: string
  description?: string
}

const TagGroup = ({ children, ...props }: TagGroupProps) => {
  return (
    <TagGroupPrimitive
      {...props}
      className={twMerge("flex flex-wrap flex-col gap-1", props.className)}
    >
      <TagGroupContext.Provider
        value={{
          intent: props.intent || "primary",
          shape: props.shape || "square"
        }}
      >
        {props.label && <Label>{props.label}</Label>}
        {children}
        {props.description && <Description>{props.description}</Description>}
      </TagGroupContext.Provider>
    </TagGroupPrimitive>
  )
}

const TagList = <T extends object>({ className, ...props }: TagListProps<T>) => {
  return <TagListPrimitive {...props} className={ctr(className, "flex flex-wrap gap-2")} />
}

const tagStyles = tv({
  extend: focusStyles,
  base: [badgeStyles.base, "cursor-pointer jdt3lr2x"],
  variants: {
    isFocused: { true: "ring-1" },
    isDisabled: { true: "opacity-50 cursor-default" },
    allowsRemoving: { true: "pr-1" }
  }
})

interface TagProps extends TagPrimitiveProps {
  intent?: Intent
  shape?: Shape
}

const TagItem = ({ children, className, intent, shape, ...props }: TagProps) => {
  const textValue = typeof children === "string" ? children : undefined
  const groupContext = React.useContext(TagGroupContext)

  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={cr(className, (_, renderProps) => {
        const finalIntent = intent || groupContext.intent
        const finalShape = shape || groupContext.shape

        return tagStyles({
          ...renderProps,
          className: cn([
            intents[finalIntent]?.base,
            badgeShapes[finalShape],
            renderProps.isSelected ? intents[finalIntent].selected : undefined
          ])
        })
      })}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {children}
            {allowsRemoving && (
              <Button
                slot="remove"
                className={cr("", (className) => {
                  return twMerge(
                    "rounded focus:outline-none size-3.5 grid place-content-center -mr-0.5 focus-visible:ring-1 focus-visible:ring-primary",
                    className
                  )
                })}
              >
                <span className="shrink-0 text-base/4 -mr-px">
                  <IconX className="size-3" />
                </span>
              </Button>
            )}
          </>
        )
      }}
    </TagPrimitive>
  )
}

const Tag = {
  Group: TagGroup,
  Item: TagItem,
  List: TagList
}

export { Tag, type RestrictedIntent }
