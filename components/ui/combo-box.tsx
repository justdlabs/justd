'use client'

import React from 'react'

import { IconChevronLgDown, IconX } from '@irsyadadl/paranoid'
import {
  ComboBox as ComboboxPrimitive,
  type ComboBoxProps as ComboboxPrimitiveProps,
  ComboBoxStateContext,
  type ValidationResult
} from 'react-aria-components'

import { Button, ButtonPrimitive } from './button'
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
      <FieldGroup className="pl-0 relative">
        <Input className="pl-2.5" placeholder={placeholder} />
        <Button
          size="square-petite"
          appearance="plain"
          className="h-7 w-8 rounded outline-offset-0 active:bg-transparent hover:bg-transparent pressed:bg-transparent"
        >
          {!props?.inputValue && (
            <IconChevronLgDown
              aria-hidden
              className="text-muted-fg transition duration-200 group-open:rotate-180 group-open:text-fg"
            />
          )}
        </Button>
        {props?.inputValue && <ComboBoxClearButton />}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverPicker>
        <ListBoxPicker items={items}>{children}</ListBoxPicker>
      </PopoverPicker>
    </ComboboxPrimitive>
  )
}

const ComboBoxClearButton = () => {
  const state = React.useContext(ComboBoxStateContext)

  return (
    <ButtonPrimitive
      className="focus:outline-none absolute inset-y-0 right-0 flex items-center pr-2 text-muted-fg hover:text-fg"
      slot={null}
      aria-label="Clear"
      onPress={() => {
        state?.setSelectedKey(null)
        state?.open()
      }}
    >
      <IconX className="size-4" />
    </ButtonPrimitive>
  )
}

const ComboBoxItem = DropdownItem
const ComboBoxSection = DropdownSection

export { ComboBox, ComboBoxItem, ComboBoxSection, type ComboBoxProps }
