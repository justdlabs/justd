'use client'

import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, Label } from './field'

interface RadioGroupProps extends Omit<Primitive.RadioGroupProps, 'children'> {
    label?: string
    children?: ReactNode
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

const RadioGroup = (props: RadioGroupProps) => {
    return (
        <Primitive.RadioGroup
            {...props}
            className={cn('group flex flex-col gap-2', props.className)}
        >
            <Label>{props.label}</Label>
            <div className='flex gap-2 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col'>
                {props.children}
            </div>
            {props.description && <Description>{props.description}</Description>}
            <FieldError>{props.errorMessage}</FieldError>
        </Primitive.RadioGroup>
    )
}

const radioStyles = tv({
    base: 'size-4 rounded-full border border-input bg-background transition',
    variants: {
        isSelected: {
            true: 'border-[4.5px] border-primary'
        },
        isFocused: {
            true: [
                'border-primary bg-primary/20 ring-4 ring-primary/20',
                'group-invalid:border-danger group-invalid:bg-danger/20 group-invalid:ring-danger/20'
            ]
        },
        isInvalid: {
            true: 'border-danger bg-danger/20'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

const Radio = (props: Primitive.RadioProps) => {
    return (
        <Primitive.Radio
            {...props}
            className={cn(
                'group flex items-center gap-2 text-sm text-foreground transition disabled:text-foreground/70',
                props.className
            )}
        >
            {(renderProps) => (
                <>
                    <div className={radioStyles(renderProps)} />
                    {props.children}
                </>
            )}
        </Primitive.Radio>
    )
}
export { Radio, RadioGroup }
