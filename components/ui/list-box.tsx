'use client'

import * as React from 'react'

import { IconHamburger } from '@irsyadadl/paranoid'
import {
  composeRenderProps,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  type ListBoxItemProps as ListBoxItemPrimitiveProps,
  type ListBoxProps as ListBoxPrimitiveProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownItemDetails, DropdownSection } from './dropdown'
import { cn } from './primitive'

const listBoxStyles = tv({
  base: 'flex max-h-96 w-full min-w-72 flex-col overflow-y-auto rounded-xl border p-1 shadow-xl outline-none'
})

interface ListBoxProps<T> extends ListBoxPrimitiveProps<T> {
  className?: string
}

const ListBox = <T extends object>({ children, className, ...props }: ListBoxProps<T>) => (
  <ListBoxPrimitive {...props} className={listBoxStyles({ className })}>
    {children}
  </ListBoxPrimitive>
)

const listBoxItemStyles = tv({
  base: 'my-0.5 cursor-pointer rounded-md p-2 text-base outline-none transition lg:text-sm',
  variants: {
    isHovered: { true: 'bg-secondary text-secondary-fg' },
    isFocused: {
      true: '[&_[data-slot=icon]]:text-primary-fg [&_[data-slot=label]]:text-primary-fg [&_.text-muted-fg]:text-primary-fg/80 bg-primary text-primary-fg'
    },
    isDragging: { true: 'cursor-grabbing bg-secondary text-secondary-fg' },
    isSelected: { true: 'bg-primary text-primary-fg' },
    isDisabled: {
      true: 'opacity-70 cursor-default text-muted-fg'
    }
  }
})

interface ListBoxItemProps<T extends Object> extends ListBoxItemPrimitiveProps<T> {
  className?: string
}

const ListBoxItem = <T extends object>({ children, className, ...props }: ListBoxItemProps<T>) => {
  const textValue = typeof children === 'string' ? children : undefined

  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        listBoxItemStyles({
          ...renderProps,
          className
        })
      )}
    >
      {(values) => (
        <div className="flex items-center gap-2">
          <>
            {values.allowsDragging && (
              <IconHamburger
                className={cn(
                  'size-4 shrink-0 text-muted-fg transition',
                  values.isFocused && 'text-fg',
                  values.isDragging && 'text-fg',
                  values.isSelected && 'text-primary-fg/70'
                )}
              />
            )}
            <div className="flex flex-col">
              {typeof children === 'function' ? children(values) : children}
            </div>
          </>
        </div>
      )}
    </ListBoxItemPrimitive>
  )
}

const ListBoxSection = DropdownSection
const ListBoxItemDetails = DropdownItemDetails

interface ListBoxPickerProps<T> extends ListBoxProps<T> {}

const ListBoxPicker = <T extends object>({ className, ...props }: ListBoxPickerProps<T>) => {
  return (
    <ListBoxPrimitive
      className={cn('max-h-72 overflow-auto p-1 outline-none', className)}
      {...props}
    />
  )
}

export { ListBox, listBoxStyles, ListBoxItem, ListBoxPicker, ListBoxSection, ListBoxItemDetails }
