"use client"

import React from "react"

import { IconHamburger } from "justd-icons"
import type {
  GridListItemProps,
  GridListProps as GridListPrimitiveProps
} from "react-aria-components"
import { Button, GridList as GridListPrimitive, GridListItem } from "react-aria-components"
import { tv } from "tailwind-variants"

import { Checkbox } from "./checkbox"
import { cr, ctr, focusRing } from "./primitive"

type GridListProps<T extends object> = GridListPrimitiveProps<T>

const GridList = <T extends object>({ children, className, ...props }: GridListProps<T>) => (
  <GridListPrimitive
    className={ctr(className, "relative max-h-96 overflow-auto rounded-lg border")}
    {...props}
  >
    {children}
  </GridListPrimitive>
)

const itemStyles = tv({
  extend: focusRing,
  base: "relative -mb-px flex cursor-default select-none gap-3 border-y px-3 py-2 text-sm text-fg -outline-offset-2 first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0",
  variants: {
    isHovered: { true: "bg-accent-subtle" },
    isSelected: {
      true: "z-20 border-y-primary/70 bg-accent-subtle hover:bg-accent-subtle/80"
    },
    isFocusVisible: {
      true: "z-20 border-y-accent bg-accent-subtle selected:bg-accent-subtle/80 hover:bg-accent-subtle/70"
    },
    isDisabled: {
      true: "z-10 text-muted-fg forced-colors:text-[GrayText]"
    }
  }
})

const Item = ({ children, className, ...props }: GridListItemProps) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <GridListItem
      textValue={textValue}
      {...props}
      className={cr(className, (className, renderProps) =>
        itemStyles({ ...renderProps, className })
      )}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {allowsDragging && (
            <Button slot="drag">
              <IconHamburger />
            </Button>
          )}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && (
            <Checkbox className="-mr-2" slot="selection" />
          )}
          {children}
        </>
      )}
    </GridListItem>
  )
}

const EmptyState = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="p-6" {...props} />
)

GridList.Item = Item
GridList.EmptyState = EmptyState

export { GridList }
