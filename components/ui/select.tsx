'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { DropdownItem, DropdownSection } from './dropdown'
import { Description, FieldError, Label } from './field'
import { ListBox } from './list-box'
import { Popover } from './popover'

interface SelectProps<T extends object>
    extends Omit<Primitive.SelectProps<T>, 'children'> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
    items?: Iterable<T>
    children: React.ReactNode | ((item: T) => React.ReactNode)
}

function Select<T extends object>({
    label,
    description,
    errorMessage,
    children,
    items,
    ...props
}: SelectProps<T>) {
    return (
        <Primitive.Select
            {...props}
            className={cn(
                'group flex w-full flex-col gap-1 outline-none',
                props.className
            )}
        >
            {label && <Label>{label}</Label>}
            <Primitive.Button
                className={cn(
                    'flex h-10 w-full cursor-default items-center gap-4 rounded-lg border border-input bg-background py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] outline-none transition group-open:border-primary group-open:ring-4 group-open:ring-primary/20 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 group-disabled:bg-secondary group-disabled:opacity-70 dark:shadow-none',
                    'text-foreground group-invalid:border-danger group-invalid:ring-danger/20',
                    'disabled:bg-secondary disabled:text-muted-foreground'
                )}
            >
                <Primitive.SelectValue className='flex-1 text-base placeholder-shown:text-muted-foreground lg:text-sm' />
                <ChevronsUpDown
                    aria-hidden
                    className='size-4 text-muted-foreground duration-300 group-open:rotate-180 group-open:text-foreground group-disabled:opacity-70'
                />
            </Primitive.Button>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Picker>
                <ListBox.Picker items={items}>{children}</ListBox.Picker>
            </Popover.Picker>
        </Primitive.Select>
    )
}

const SelectItem = DropdownItem
const SelectSection = DropdownSection

Select.Item = SelectItem
Select.Section = SelectSection

export { Select }
