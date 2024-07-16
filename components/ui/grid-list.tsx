'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { GripVerticalIcon } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'

interface GridListProps<T extends object> extends Primitive.GridListProps<T> {}

const GridList = <T extends object>({
    selectionMode = 'single',
    children,
    ...props
}: GridListProps<T>) => (
    <Primitive.GridList
        selectionMode={selectionMode}
        {...props}
        className={cn('relative overflow-auto rounded-lg border', props.className)}
    >
        {children}
    </Primitive.GridList>
)

const itemStyles = tv({
    base: 'relative -mb-px flex cursor-default select-none gap-3 border-y px-3 py-2 text-sm text-foreground outline-none -outline-offset-2 first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0',
    variants: {
        isSelected: {
            false: 'hover:bg-secondary',
            true: 'z-20 border-y-primary/50 bg-primary/20'
        },
        isDisabled: {
            true: 'z-10 text-muted-foreground'
        }
    }
})

const GridListItem = ({ children, ...props }: Primitive.GridListItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined
    return (
        <Primitive.GridListItem textValue={textValue} {...props} className={itemStyles}>
            {({ selectionMode, selectionBehavior, allowsDragging }) => (
                <>
                    {allowsDragging && (
                        <Primitive.Button slot='drag'>
                            <GripVerticalIcon className='size-4 text-foreground/70' />
                        </Primitive.Button>
                    )}
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
                        <Checkbox slot='selection' />
                    )}
                    {children}
                </>
            )}
        </Primitive.GridListItem>
    )
}

const GridEmptyState = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div className='p-6' {...props} />
)

GridList.Item = GridListItem
GridList.EmptyState = GridEmptyState

export { GridList }
