'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, fieldGroupStyles, Label } from './field'

interface DateFieldProps<T extends Primitive.DateValue>
    extends Primitive.DateFieldProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

const DateField = <T extends Primitive.DateValue>({
    label,
    description,
    errorMessage,
    ...props
}: DateFieldProps<T>) => {
    return (
        <Primitive.DateField
            {...props}
            className={cn('flex flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <DateInput />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.DateField>
    )
}

const segmentStyles = tv({
    base: 'inline rounded p-0.5 tracking-wider text-foreground caret-transparent outline outline-0 type-literal:px-0 lg:text-sm',
    variants: {
        isPlaceholder: {
            true: 'text-muted-foreground'
        },
        isDisabled: {
            true: 'text-muted-foreground'
        },
        isFocused: {
            true: 'bg-primary text-primary-foreground'
        }
    }
})

const DateInput = (props: Omit<Primitive.DateInputProps, 'children'>) => {
    return (
        <Primitive.DateInput
            className={cn(
                'min-w-sm block w-full px-2 py-2 font-mono uppercase disabled:bg-muted lg:text-sm',
                fieldGroupStyles.base,
                props.className
            )}
            {...props}
        >
            {(segment) => (
                <Primitive.DateSegment segment={segment} className={segmentStyles} />
            )}
        </Primitive.DateInput>
    )
}

export { DateField, DateInput }
