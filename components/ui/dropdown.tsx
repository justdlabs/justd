"use client"

import * as React from "react"

import { IconCheck } from "justd-icons"
import {
  Collection,
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  type ListBoxItemProps,
  Section,
  type SectionProps,
  Text,
  type TextProps
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn, cr } from "./primitive"

const dropdownItemStyles = tv({
  base: [
    "group flex cursor-default select-none items-center gap-x-1.5 rounded-[calc(var(--radius)-1px)] py-2 pl-2.5 relative pr-1.5 text-base outline outline-0 forced-color-adjust-none lg:text-sm",
    "has-submenu:open:data-[danger=true]:bg-danger/20 has-submenu:open:data-[danger=true]:text-danger",
    "has-submenu:open:bg-accent has-submenu:open:text-accent-fg [&[data-has-submenu][data-open]_[data-slot=icon]]:text-accent-fg",
    "[&_[data-slot=avatar]]:-mr-0.5 [&_[data-slot=avatar]]:size-6 sm:[&_[data-slot=avatar]]:size-5",
    "[&_[data-slot=icon]]:size-4 [&_[data-slot=icon]]:shrink-0 [&_[data-slot=icon]]:text-muted-fg [&[data-hovered]_[data-slot=icon]]:text-accent-fg [&[data-focused]_[data-slot=icon]]:text-accent-fg [&[data-danger]_[data-slot=icon]]:text-danger/60",
    "forced-colors:[&_[data-slot=icon]]:text-[CanvasText] forced-colors:[&_[data-slot=icon]]:group-data-[focus]:text-[Canvas] "
  ],
  variants: {
    isDisabled: {
      false: "text-fg",
      true: "text-muted-fg forced-colors:text-[GrayText]"
    },
    isFocused: {
      false: "data-[danger=true]:text-danger",
      true: [
        "bg-accent text-accent-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "data-[danger=true]:bg-danger data-[danger=true]:text-danger-fg",
        "[&_.text-muted-fg]:text-accent-fg/80 [&[data-slot=label]]:text-accent-fg [&[data-slot=description]]:text-accent-fg"
      ]
    }
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: "bg-secondary"
    }
  ]
})

const dropdownSectionStyles = tv({
  slots: {
    section:
      "first:-mt-[5px] xss3 flex flex-col gap-y-0.5 after:content-[''] after:block after:h-[5px]",
    header:
      "text-sm font-medium text-muted-fg bg-tertiary px-4 py-2 truncate min-w-[--trigger-width] sticky -top-[5px] backdrop-blur -mt-px -mb-0.5 -mx-1 z-10 supports-[-moz-appearance:none]:bg-tertiary border-y [&+*]:mt-1"
  }
})

const { section, header } = dropdownSectionStyles()

interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string
}

const DropdownSection = <T extends object>({ className, ...props }: DropdownSectionProps<T>) => {
  return (
    <Section className={section({ className })}>
      {"title" in props && <Header className={header()}>{props.title}</Header>}
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  )
}

const DropdownItem = ({ className, ...props }: ListBoxItemProps) => {
  const textValue =
    props.textValue || (typeof props.children === "string" ? props.children : undefined)
  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      className={cr(className, (className, renderProps) =>
        dropdownItemStyles({ ...renderProps, className })
      )}
      {...props}
    >
      {cr(props.children, (children, { isSelected }) => (
        <>
          <span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-medium">
            {children}
          </span>

          {isSelected && (
            <span className="absolute right-2 top-3 lg:top-2.5">
              <IconCheck />
            </span>
          )}
        </>
      ))}
    </ListBoxItemPrimitive>
  )
}

interface DropdownItemSlot extends TextProps {
  label?: TextProps["children"]
  description?: TextProps["children"]
  classNames?: {
    label?: TextProps["className"]
    description?: TextProps["className"]
  }
}

const DropdownItemDetails = ({ label, description, classNames, ...props }: DropdownItemSlot) => {
  const { slot, children, title, ...restProps } = props

  return (
    <div className="flex flex-col gap-1" {...restProps}>
      {label && (
        <Text
          slot={slot ?? "label"}
          className={cn("font-medium lg:text-sm", classNames?.label)}
          {...restProps}
        >
          {label}
        </Text>
      )}
      {description && (
        <Text
          slot={slot ?? "description"}
          className={cn("text-muted-fg text-xs", classNames?.description)}
          {...restProps}
        >
          {description}
        </Text>
      )}
      {!title && children}
    </div>
  )
}

// Note: This is not exposed component, but it's used in other components to render dropdowns.
export { DropdownItem, dropdownItemStyles, DropdownItemDetails, DropdownSection }
