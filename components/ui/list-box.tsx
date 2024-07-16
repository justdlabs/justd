'use client'

import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownSection } from './dropdown'

const listBox = tv({
    slots: {
        root: 'border-surface-2 flex max-h-96 w-full min-w-72 flex-col overflow-auto overflow-y-auto rounded-xl border p-1 shadow-xl outline-none',
        item: [
            'my-0.5 cursor-pointer rounded-md p-2 text-base outline-none transition lg:text-sm',
            'hover:bg-secondary', // hover
            'focus:bg-secondary', // focus
            'dragging:cursor-grab dragging:bg-secondary', // dragging
            'selected:bg-primary selected:text-primary-foreground' // selected
        ]
    }
})

const { root, item } = listBox()

const ListBox = <T extends object>({
    children,
    className,
    ...props
}: Primitive.ListBoxProps<T> & { className?: string }) => (
    <Primitive.ListBox {...props} className={root({ className: className })}>
        {children}
    </Primitive.ListBox>
)

const ListBoxItem = <T extends object>({
    children,
    className,
    ...props
}: Primitive.ListBoxItemProps<T> & {
    className?: string
}) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <Primitive.ListBoxItem
            textValue={textValue}
            {...props}
            className={item({ className })}
        >
            {(values) => (
                <div className='flex items-center gap-2'>
                    <>
                        {values.allowsDragging && (
                            <MenuIcon
                                className={cn(
                                    'size-4 shrink-0 text-muted-foreground transition',
                                    values.isFocused && 'text-foreground',
                                    values.isDragging && 'text-foreground',
                                    values.isSelected && 'text-primary-foreground'
                                )}
                            />
                        )}
                        <div className='flex flex-col'>
                            {typeof children === 'function' ? children(values) : children}
                            {/*{children}*/}
                        </div>
                    </>
                </div>
            )}
        </Primitive.ListBoxItem>
    )
}

const ListBoxSection = DropdownSection

interface ListBoxPickerProps<T> extends Primitive.ListBoxProps<T> {}

const ListBoxPicker = <T extends object>({
    className,
    ...props
}: ListBoxPickerProps<T>) => {
    return (
        <Primitive.ListBox
            className={cn(
                'max-h-72 overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]',
                className
            )}
            {...props}
        />
    )
}

ListBox.Picker = ListBoxPicker
ListBox.Item = ListBoxItem
ListBox.Section = ListBoxSection

export { ListBox }
