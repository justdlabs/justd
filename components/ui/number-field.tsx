'use client'

import { cn, useMediaQuery } from '@/lib/utils'
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import {
    Description,
    fieldBorderStyles,
    FieldError,
    FieldGroup,
    Input,
    Label
} from './field'

export interface NumberFieldProps extends Primitive.NumberFieldProps {
    label?: string
    description?: string
    placeholder?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

export function NumberField({
    label,
    placeholder,
    description,
    errorMessage,
    ...props
}: NumberFieldProps) {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <Primitive.NumberField
            {...props}
            className={cn('group flex flex-col gap-1', props.className)}
        >
            <Label>{label}</Label>
            <FieldGroup className='group-disabled:bg-secondary'>
                {(renderProps) => (
                    <>
                        {isMobile ? (
                            <StepperButton slot='decrement' className='border-r' />
                        ) : null}
                        <Input placeholder={placeholder} />
                        <div
                            className={fieldBorderStyles({
                                ...renderProps,
                                className: 'grid h-10 place-content-center border-s'
                            })}
                        >
                            {isMobile ? (
                                <StepperButton slot='increment' />
                            ) : (
                                <div className='flex h-full flex-col'>
                                    <StepperButton
                                        slot='increment'
                                        emblemType='chevron'
                                        className='h-5 px-1'
                                    />
                                    <div
                                        className={fieldBorderStyles({
                                            ...renderProps,
                                            className: 'border-b'
                                        })}
                                    />
                                    <StepperButton
                                        slot='decrement'
                                        emblemType='chevron'
                                        className='h-5 px-1'
                                    />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Primitive.NumberField>
    )
}

interface StepperButtonProps extends Primitive.ButtonProps {
    slot: 'increment' | 'decrement'
    emblemType?: 'chevron' | 'default'
    className?: string
}

const StepperButton = ({
    slot,
    className,
    emblemType = 'default',
    ...props
}: StepperButtonProps) => {
    const icon =
        emblemType === 'chevron' ? (
            slot === 'increment' ? (
                <ChevronUp className='size-5' />
            ) : (
                <ChevronDown className='size-5' />
            )
        ) : slot === 'increment' ? (
            <Plus />
        ) : (
            <Minus />
        )
    return (
        <Primitive.Button
            className={cn(
                'h-10 cursor-default px-2 text-muted-foreground pressed:bg-primary pressed:text-primary-foreground group-disabled:bg-secondary',
                className
            )}
            slot={slot}
            {...props}
        >
            {icon}
        </Primitive.Button>
    )
}
