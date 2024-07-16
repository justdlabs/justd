'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Description, FieldError, FieldGroup, Input, Label } from './field'

interface TextFieldProps extends Primitive.TextFieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    isLoading?: boolean
    indicatorPlace?: 'prefix' | 'suffix'
}

const TextField = ({
    label,
    description,
    errorMessage,
    placeholder,
    prefix,
    suffix,
    isLoading,
    indicatorPlace,
    ...props
}: TextFieldProps) => {
    return (
        <Primitive.TextField
            {...props}
            className={cn('group flex flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup
                data-loading={isLoading ? 'true' : undefined}
                className='flex items-center group-invalid:border-danger group-invalid:focus-within:ring-danger/20 group-disabled:bg-secondary group-disabled:opacity-50'
            >
                {isLoading && indicatorPlace === 'prefix' ? (
                    <Loader2 className='isPfx animate-spin' />
                ) : prefix ? (
                    <span className='atrs isPfx'>{prefix}</span>
                ) : null}
                <Input className='px-2.5' placeholder={placeholder} />
                {isLoading && indicatorPlace === 'suffix' ? (
                    <Loader2 className='isSfx animate-spin' />
                ) : suffix ? (
                    <span className='atrs isSfx'>{suffix}</span>
                ) : null}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.TextField>
    )
}

export { TextField }
