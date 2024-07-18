'use client'

import * as React from 'react'

import { IconHamburger } from '@irsyadadl/paranoid'
import {
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  type ListBoxItemProps,
  type ListBoxProps as ListBoxPrimitiveProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownSection } from './dropdown'
import { cn } from './primitive'

const listBox = tv({
  slots: {
    root: 'border-surface-2 flex max-h-96 w-full min-w-72 flex-col overflow-auto overflow-y-auto rounded-xl border p-1 shadow-xl outline-none',
    item: [
      'my-0.5 cursor-pointer rounded-md p-2 text-base outline-none transition lg:text-sm',
      'hover:bg-secondary', // hover
      'focus:bg-secondary', // focus
      'dragging:cursor-grab dragging:bg-secondary', // dragging
      'selected:bg-primary selected:text-primary-fg' // selected
    ]
  }
})

const { root, item } = listBox()

interface ListBoxProps<T> extends ListBoxPrimitiveProps<T> {
  className?: string
}

const ListBox = <T extends object>({ children, className, ...props }: ListBoxProps<T>) => (
  <ListBoxPrimitive {...props} className={root({ className: className })}>
    {children}
  </ListBoxPrimitive>
)

const ListBoxItem = <T extends object>({
  children,
  className,
  ...props
}: ListBoxItemProps<T> & {
  className?: string
}) => {
  const textValue = typeof children === 'string' ? children : undefined

  return (
    <ListBoxItemPrimitive textValue={textValue} {...props} className={item({ className })}>
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
            <div className="flex flex-col">{typeof children === 'function' ? children(values) : children}</div>
          </>
        </div>
      )}
    </ListBoxItemPrimitive>
  )
}

const ListBoxSection = DropdownSection

interface ListBoxPickerProps<T> extends ListBoxProps<T> {}

const ListBoxPicker = <T extends object>({ className, ...props }: ListBoxPickerProps<T>) => {
  return (
    <ListBoxPrimitive
      className={cn('max-h-72 overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]', className)}
      {...props}
    />
  )
}

export { ListBox, listBox, ListBoxItem, ListBoxPicker, ListBoxSection }
