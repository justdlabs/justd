'use client'

import React from 'react'

import { IconChevronLgDown } from '@irsyadadl/paranoid'
import {
  ComboBox as ComboboxPrimitive,
  type ComboBoxProps as ComboboxPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'

import { Button } from './button'
import { DropdownItem, DropdownSection } from './dropdown'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ListBoxPicker } from './list-box'
import { PopoverPicker } from './popover'
import { ctr } from './primitive'

interface ComboBoxProps<T extends object> extends Omit<ComboboxPrimitiveProps<T>, 'children'> {
  label?: string
  placeholder?: string
  description?: string | null
  errorMessage?: string | ((validation: ValidationResult) => string)
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

const ComboBox = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  placeholder,
  items,
  ...props
}: ComboBoxProps<T>) => {
  return (
    <ComboboxPrimitive
      menuTrigger="focus"
      {...props}
      className={ctr(props.className, 'group w-full flex flex-col gap-1')}
    >
      <Label>{label}</Label>
      <FieldGroup className="pl-0">
        <Input className="pl-2.5" placeholder={placeholder} />
        <Button
          size="square-petite"
          appearance="plain"
          className="h-7 w-8 rounded outline-offset-0 active:bg-transparent hover:bg-transparent pressed:bg-transparent"
        >
          <IconChevronLgDown
            aria-hidden
            className="text-muted-fg transition duration-200 group-open:rotate-180 group-open:text-fg"
          />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverPicker>
        <ListBoxPicker items={items}>{children}</ListBoxPicker>
      </PopoverPicker>
    </ComboboxPrimitive>
  )
}

const ComboBoxItem = DropdownItem
const ComboBoxSection = DropdownSection

export { ComboBox, ComboBoxItem, ComboBoxSection, type ComboBoxProps }
