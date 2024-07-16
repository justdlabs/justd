'use client'

import { cn } from '@/lib/utils'
import { Search, X } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Button } from './button'
import { Description, FieldError, FieldGroup, Input, Label } from './field'

export interface SearchFieldProps extends Primitive.SearchFieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

function SearchField({
    placeholder = 'Search',
    label,
    description,
    errorMessage,
    ...props
}: SearchFieldProps) {
    return (
        <Primitive.SearchField
            {...props}
            className={cn('group flex min-w-[40px] flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup>
                <Search
                    aria-hidden
                    className='ml-2 size-4 shrink-0 text-muted-foreground group-disabled:text-muted-foreground/70'
                />
                <Input
                    placeholder={placeholder}
                    className='[&::-webkit-search-cancel-button]:hidden'
                />
                <Button
                    size='icon'
                    variant='ghost'
                    className='mr-1 size-8 text-muted-foreground group-empty:invisible hover:bg-transparent pressed:text-foreground'
                >
                    <X aria-hidden className='size-4' />
                </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.SearchField>
    )
}

export { SearchField }
