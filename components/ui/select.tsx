'use client'

import * as React from 'react'

import { IconChevronLgDown } from '@irsyadadl/paranoid'
import type { Placement } from '@react-types/overlays'
import {
  Button,
  composeRenderProps,
  Group,
  Select as SelectPrimitive,
  type SelectProps as SelectPrimitiveProps,
  SelectValue,
  type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownItem, DropdownItemDetails, DropdownSection } from './dropdown'
import { Description, FieldError, Label } from './field'
import { ListBoxPicker } from './list-box'
import { PopoverPicker } from './popover'
import { ctr, focusStyles } from './primitive'

const selectTriggerStyles = tv({
  extend: focusStyles,
  base: [
    'btr group-disabled:bg-secondary group-disabled:opacity-50 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 group-open:border-primary group-open:ring-4 group-open:ring-primary/20 flex h-10 w-full cursor-default items-center gap-4 rounded-lg border border-input bg-background py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:shadow-none'
  ],
  variants: {
    isDisabled: {
      false:
        'text-fg group-invalid:border-danger group-invalid:ring-danger/20 forced-colors:group-invalid:border-[Mark]',
      true: 'bg-secondary text-muted-fg forced-colors:border-[GrayText] forced-colors:text-[GrayText]'
    }
  }
})

interface SelectProps<T extends object> extends Omit<SelectPrimitiveProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  placement?: Placement
  prefix?: React.ReactNode
  className?: string
}

const Select = <T extends object>({
  label,
  description,
  placement,
  errorMessage,
  children,
  items,
  className,
  prefix,
  ...props
}: SelectProps<T>) => {
  return (
    <SelectPrimitive {...props} className={ctr(className, 'group flex w-full flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <Group className="relative">
        <Button
          className={composeRenderProps(className, (className, renderProps) =>
            selectTriggerStyles({
              ...renderProps,
              className
            })
          )}
        >
          {prefix && <span className="-mr-1">{prefix}</span>}
          <SelectValue className="flex-1 [&_[slot=description]]:hidden text-base placeholder-shown:text-muted-fg lg:text-sm" />

          <IconChevronLgDown
            aria-hidden
            className="size-4 text-muted-fg duration-300 group-open:rotate-180 group-open:text-fg group-disabled:opacity-50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
          />
        </Button>
      </Group>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverPicker trigger="Select" placement={placement}>
        <ListBoxPicker aria-label="items" items={items}>
          {children}
        </ListBoxPicker>
      </PopoverPicker>
    </SelectPrimitive>
  )
}

const SelectItemDetails = DropdownItemDetails
const SelectItem = DropdownItem
const SelectSection = DropdownSection

export { Select, SelectItem, SelectItemDetails, SelectSection }
