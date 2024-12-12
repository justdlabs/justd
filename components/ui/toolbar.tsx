"use client"

import { createContext, useContext } from "react"

import type { GroupProps, SeparatorProps, ToolbarProps } from "react-aria-components"
import { composeRenderProps, Group, Toolbar as ToolbarPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "./primitive"
import { Separator } from "./separator"
import { Toggle } from "./toggle"

const ToolbarContext = createContext<{ orientation?: ToolbarProps["orientation"] }>({
  orientation: "horizontal"
})

const toolbarStyles = tv({
  base: "flex gap-2 group",
  variants: {
    orientation: {
      horizontal: "flex-row [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]",
      vertical: "flex-col items-start"
    }
  }
})

const Toolbar = ({ orientation = "horizontal", className, ...props }: ToolbarProps) => {
  return (
    <ToolbarContext.Provider value={{ orientation }}>
      <ToolbarPrimitive
        orientation={orientation}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          toolbarStyles({ ...renderProps, className })
        )}
      />
    </ToolbarContext.Provider>
  )
}

const ToolbarGroupContext = createContext<{ isDisabled?: boolean }>({})

const ToolbarGroup = ({ isDisabled, className, ...props }: GroupProps) => {
  return (
    <ToolbarGroupContext.Provider value={{ isDisabled }}>
      <Group
        className={cn(
          "flex gap-2 group-data-[orientation=vertical]:flex-col group-data-[orientation=vertical]:items-start",
          className
        )}
        {...props}
      >
        {props.children}
      </Group>
    </ToolbarGroupContext.Provider>
  )
}

const Item = ({ isDisabled, ...props }: React.ComponentProps<typeof Toggle>) => {
  const context = useContext(ToolbarGroupContext)
  const effectiveIsDisabled = isDisabled || context.isDisabled

  return <Toggle isDisabled={effectiveIsDisabled} {...props} />
}

const ToolbarSeparator = ({ className, ...props }: SeparatorProps) => {
  const { orientation } = useContext(ToolbarContext)
  const effectiveOrientation = orientation === "vertical" ? "horizontal" : "vertical"
  return (
    <Separator
      orientation={effectiveOrientation}
      className={cn(effectiveOrientation === "vertical" ? "mx-1.5" : "my-1.5 w-9", className)}
      {...props}
    />
  )
}

Toolbar.Group = ToolbarGroup
Toolbar.Separator = ToolbarSeparator
Toolbar.Item = Item

export { Toolbar }
