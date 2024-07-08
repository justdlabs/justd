'use client'

import {
  Button,
  GridListItem as GridListItemPrimitive,
  GridList as GridListPrimitive,
  type GridListItemProps,
  type GridListProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Checkbox } from './checkbox'
import { composeTailwindRenderProps, focusRing } from './primitive'

const GridList = <T extends object>({ children, ...props }: GridListProps<T>) => (
  <GridListPrimitive
    {...props}
    className={composeTailwindRenderProps(props.className, 'relative overflow-auto rounded-lg border')}
  >
    {children}
  </GridListPrimitive>
)

const itemStyles = tv({
  extend: focusRing,
  base: 'relative -mb-px flex cursor-default select-none gap-3 border-y px-3 py-2 text-sm text-fg -outline-offset-2 first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0',
  variants: {
    isSelected: {
      false: 'hover:bg-secondary',
      true: 'z-20 border-y-primary/50 bg-primary/20'
    },
    isDisabled: {
      true: 'z-10 text-muted-fg forced-colors:text-[GrayText]'
    }
  }
})

const GridListItem = ({ children, ...props }: GridListItemProps) => {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <GridListItemPrimitive textValue={textValue} {...props} className={itemStyles}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && <Checkbox slot="selection" />}
          {children}
        </>
      )}
    </GridListItemPrimitive>
  )
}

export { GridList, GridListItem }
