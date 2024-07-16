'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

import { DateInput } from './date-field'
import { Description, FieldError, fieldGroupStyles, Label } from './field'

export interface TimeFieldProps<T extends Primitive.TimeValue>
    extends Primitive.TimeFieldProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

export function TimeField<T extends Primitive.TimeValue>({
    label,
    description,
    errorMessage,
    ...props
}: TimeFieldProps<T>) {
    return (
        <Primitive.TimeField
            {...props}
            className={cn('flex flex-col gap-1', props.className)}
        >
            <Label>{label}</Label>
            <DateInput
                className={cn(
                    'flex w-fit min-w-28 justify-around whitespace-nowrap p-2 font-mono lg:text-sm',
                    fieldGroupStyles.base
                )}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.TimeField>
    )
}
