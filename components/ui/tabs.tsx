"use client"

import { useId } from "react"

import { LayoutGroup, motion } from "motion/react"
import {
  TabList,
  type TabListProps,
  TabPanel,
  type TabPanelProps,
  Tab as TabPrimitive,
  type TabProps,
  Tabs as TabsPrimitive,
  type TabsProps,
  composeRenderProps,
} from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { tv } from "tailwind-variants"

import { cn } from "@/utils/classes"
import { composeTailwindRenderProps } from "./primitive"

const tabsStyles = tv({
  base: "group/tabs flex gap-4 forced-color-adjust-none",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "w-[800px] flex-row",
    },
  },
})

const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <TabsPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        tabsStyles({
          ...renderProps,
          className,
        }),
      )}
    />
  )
}

const tabListStyles = tv({
  base: "flex forced-color-adjust-none",
  variants: {
    orientation: {
      horizontal: "flex-row gap-x-5 border-b border-border",
      vertical: "flex-col items-start gap-y-4 border-l",
    },
  },
})

const List = <T extends object>(props: TabListProps<T>) => {
  const id = useId()
  return (
    <LayoutGroup id={id}>
      <TabList
        {...props}
        className={composeRenderProps(props.className, (className, renderProps) =>
          tabListStyles({ ...renderProps, className }),
        )}
      />
    </LayoutGroup>
  )
}

const tabStyles = tv({
  base: [
    "relative flex whitespace-nowrap cursor-default items-center rounded-full text-sm font-medium outline-hidden transition data-hovered:text-fg *:data-[slot=icon]:size-4 *:data-[slot=icon]:mr-2",
    "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:py-0 group-data-[orientation=vertical]/tabs:pl-4 group-data-[orientation=vertical]/tabs:pr-2",
    "group-data-[orientation=horizontal]/tabs:pb-3",
  ],
  variants: {
    isSelected: {
      false: "text-muted-fg",
      true: "text-fg",
    },
    isFocused: { false: "ring-0", true: "text-fg" },
    isDisabled: {
      true: "text-muted-fg/50",
    },
  },
})

const Tab = ({ children, ...props }: TabProps) => {
  return (
    <TabPrimitive
      {...props}
      className={composeRenderProps(props.className, (_className, renderProps) =>
        tabStyles({
          ...renderProps,
          className: twJoin("href" in props && "cursor-pointer", _className),
        }),
      )}
    >
      {({ isSelected }) => (
        <>
          {children as React.ReactNode}
          {isSelected && (
            <motion.span
              className={cn(
                "absolute rounded bg-fg",
                // horizontal
                "group-data-[orientation=horizontal]/tabs:-bottom-px group-data-[orientation=horizontal]/tabs:inset-x-0 group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=horizontal]/tabs:w-full",
                // vertical
                "group-data-[orientation=vertical]/tabs:left-0 group-data-[orientation=vertical]/tabs:h-[calc(100%-10%)] group-data-[orientation=vertical]/tabs:w-0.5 group-data-[orientation=vertical]/tabs:transform",
              )}
              layoutId="current-selected"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            />
          )}
        </>
      )}
    </TabPrimitive>
  )
}

const Panel = ({ className, ...props }: TabPanelProps) => {
  return (
    <TabPanel
      {...props}
      className={composeTailwindRenderProps(
        className,
        "flex-1 text-fg text-sm data-focus-visible:outline-hidden",
      )}
    />
  )
}

Tabs.List = List
Tabs.Tab = Tab
Tabs.Panel = Panel

export { Tabs }
