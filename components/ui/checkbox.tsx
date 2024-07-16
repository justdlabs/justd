'use client'

import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Check, Minus } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, Label } from './field'

interface CheckboxGroupProps extends Omit<Primitive.CheckboxGroupProps, 'children'> {
    label?: string
    children?: ReactNode
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
    return (
        <Primitive.CheckboxGroup
            {...props}
            className={cn('flex flex-col gap-2', props.className)}
        >
            <Label>{props.label}</Label>
            {props.children}
            {props.description && <Description>{props.description}</Description>}
            <FieldError>{props.errorMessage}</FieldError>
        </Primitive.CheckboxGroup>
    )
}

const boxStyles = tv({
    base: 'flex size-4 flex-shrink-0 items-center justify-center rounded border text-background transition',
    variants: {
        isSelected: {
            true: [
                'border-primary bg-primary text-primary-foreground',
                'group-invalid:border-danger group-invalid:bg-danger group-invalid:text-danger-foreground'
            ]
        },
        isFocused: {
            true: [
                'border-primary ring-4 ring-primary/20',
                'group-invalid:border-danger group-invalid:text-danger-foreground group-invalid:ring-danger/20'
            ]
        },
        isInvalid: {
            true: 'border-danger bg-danger text-danger-foreground ring-danger/20'
        }
    }
})

const Checkbox = (props: Primitive.CheckboxProps) => {
    return (
        <Primitive.Checkbox
            {...props}
            className={cn(
                'group flex items-center gap-2 text-sm transition disabled:opacity-70',
                props.className
            )}
        >
            {({ isSelected, isIndeterminate, ...renderProps }) => (
                <>
                    <div
                        className={boxStyles({
                            isSelected: isSelected || isIndeterminate,
                            ...renderProps
                        })}
                    >
                        {isIndeterminate ? (
                            <Minus className='size-3' />
                        ) : isSelected ? (
                            <Check className='size-3' />
                        ) : null}
                    </div>
                    {props.children}
                </>
            )}
        </Primitive.Checkbox>
    )
}

export { Checkbox, CheckboxGroup }
