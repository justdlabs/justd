"use client"

import * as React from "react"

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from "justd-icons"
import {
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  Section,
  type SectionProps,
  Separator
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { buttonStyles } from "./button"
import { cn, cr } from "./primitive"

const paginationStyles = tv({
  slots: {
    pagination: "mx-auto flex w-full justify-center gap-1",
    section: "flex h-9 gap-1",
    list: "flex flex-row items-center gap-1",
    itemButton:
      "focus-visible:border-primary cursor-pointer focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20",
    itemLabel: "h-9 px-3.5 grid place-content-center",
    itemSeparator: "h-9 grid place-content-center",
    itemEllipsis:
      "flex items-center justify-center focus-visible:border-primary rounded-lg border border-transparent focus:outline-none size-9 focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20",
    itemEllipsisIcon: "flex size-9 items-center justify-center",
    defaultItem:
      "focus-visible:border-primary cursor-pointer disabled:cursor-default focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-100",
    itemSeparatorLine: "h-5 w-[1.5px] bg-zinc-300 dark:bg-zinc-700 rotate-[14deg] shrink-0"
  }
})

const {
  pagination,
  section,
  list,
  itemButton,
  itemLabel,
  itemSeparator,
  itemEllipsis,
  itemEllipsisIcon,
  defaultItem,
  itemSeparatorLine
} = paginationStyles()

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav role="navigation" aria-label="pagination" className={pagination({ className })} {...props} />
)

const PaginationSection = <T extends object>({ className, ...props }: SectionProps<T>) => (
  <Section {...props} className={section({ className })} />
)

const PaginationList = <T extends object>({ className, ...props }: ListBoxProps<T>) => {
  return (
    <ListBox
      orientation="horizontal"
      aria-label={props["aria-label"] || "Pagination"}
      layout="grid"
      className={cr(className, (className) => list({ className }))}
      {...props}
    />
  )
}

const renderListItem = (
  props: ListBoxItemProps & {
    textValue?: string
    "aria-current"?: string | undefined
    isDisabled?: boolean
    className?: string
  },
  children: React.ReactNode
) => <ListBoxItem {...props}>{children}</ListBoxItem>

interface PaginationItemProps extends ListBoxItemProps {
  children?: React.ReactNode
  className?: string
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
  isCurrent?: boolean
  variant?: "label" | "separator" | "ellipsis" | "default" | "last" | "first" | "previous" | "next"
}

const PaginationItem = ({
  variant = "default",
  size = "square-petite",
  appearance = "outline",
  intent,
  shape = "square",
  className,
  isCurrent,
  children,
  ...props
}: PaginationItemProps) => {
  const textValue =
    typeof children === "string"
      ? children
      : typeof children === "number"
        ? children.toString()
        : undefined

  const renderPaginationIndicator = (indicator: React.ReactNode) =>
    renderListItem(
      {
        textValue: variant,
        "aria-current": isCurrent ? "page" : undefined,
        isDisabled: isCurrent,
        className: cn(
          buttonStyles({
            appearance: "outline",
            size: "square-petite",
            className: itemButton()
          }),
          className
        ),
        ...props
      },
      indicator
    )

  switch (variant) {
    case "label":
      return renderListItem(
        {
          textValue: textValue,
          className: itemLabel({ className }),
          ...props
        },
        children
      )
    case "separator":
      return renderListItem(
        {
          textValue: "Separator",
          className: itemSeparator({ className }),
          ...props
        },
        <Separator orientation="vertical" className={itemSeparatorLine()} />
      )
    case "ellipsis":
      return renderListItem(
        {
          textValue: "More pages",
          className: itemEllipsis({ className }),
          ...props
        },
        <span aria-hidden className={itemEllipsisIcon({ className })}>
          <IconDotsHorizontal />
        </span>
      )
    case "previous":
      return renderPaginationIndicator(<IconChevronLgLeft />)
    case "next":
      return renderPaginationIndicator(<IconChevronLgRight />)
    case "first":
      return renderPaginationIndicator(<IconChevronsLgLeft />)
    case "last":
      return renderPaginationIndicator(<IconChevronsLgRight />)
    default:
      return renderListItem(
        {
          textValue: textValue,
          "aria-current": isCurrent ? "page" : undefined,
          isDisabled: isCurrent,
          className: cn(
            buttonStyles({
              intent: isCurrent ? "primary" : intent,
              appearance: isCurrent ? "solid" : appearance,
              size,
              className: defaultItem({ className })
            }),
            className
          ),
          ...props
        },
        children
      )
  }
}

Pagination.Item = PaginationItem
Pagination.List = PaginationList
Pagination.Section = PaginationSection

export { Pagination }
