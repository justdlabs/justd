'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

import { Description, FieldError, Label } from './field'

export interface TextareaProps extends Primitive.TextFieldProps {
    autoSize?: boolean
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

function Textarea({
    placeholder,
    label,
    description,
    errorMessage,
    ...props
}: TextareaProps) {
    return (
        <Primitive.TextField
            {...props}
            className={cn('group flex flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <Primitive.TextArea
                placeholder={placeholder}
                className={cn(
                    'min-h-[60px] w-full min-w-0 rounded-md border border-input bg-background px-2.5 py-2 text-base shadow-sm outline-none transition duration-200 disabled:bg-secondary disabled:opacity-70 sm:text-sm',
                    'focus:border-primary focus:ring-4 focus:ring-primary/20',
                    'focus:invalid:border-danger focus:invalid:ring-4 focus:invalid:ring-danger/20',
                    'invalid:border-danger'
                )}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.TextField>
    )
}

export { Textarea }
