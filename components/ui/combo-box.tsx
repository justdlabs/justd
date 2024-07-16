'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Button } from './button'
import { DropdownItem, DropdownSection } from './dropdown'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ListBox } from './list-box'
import { Popover } from './popover'

interface ComboBoxProps<T extends object>
    extends Omit<Primitive.ComboBoxProps<T>, 'children'> {
    label?: string
    placeholder?: string
    description?: string | null
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
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
        <Primitive.ComboBox
            menuTrigger='focus'
            {...props}
            className={cn('group flex w-full flex-col gap-1', props.className)}
        >
            <Label>{label}</Label>
            <FieldGroup className='pl-0'>
                <Input className='pl-2.5' placeholder={placeholder} />
                <Button
                    size='icon'
                    variant='ghost'
                    className='h-7 w-8 rounded outline-offset-0 active:bg-transparent hover:bg-transparent pressed:bg-transparent'
                >
                    <ChevronDown
                        aria-hidden
                        className='text-muted-foreground transition duration-200 group-open:rotate-180 group-open:text-foreground'
                    />
                </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Picker>
                <ListBox.Picker items={items}>{children}</ListBox.Picker>
            </Popover.Picker>
        </Primitive.ComboBox>
    )
}

const ComboBoxItem = DropdownItem
const ComboBoxSection = DropdownSection

ComboBox.Item = ComboBoxItem
ComboBox.Section = ComboBoxSection

export { ComboBox }
