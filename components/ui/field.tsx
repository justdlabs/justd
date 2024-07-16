'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

const fieldBorderStyles = tv({
    base: 'group-focus-within:border-primary',
    variants: {
        isInvalid: {
            true: 'border-danger group-focus-within:border-danger'
        }
    }
})

const Label = (props: Primitive.LabelProps) => {
    return (
        <Primitive.Label
            {...props}
            className={cn(
                'w-fit cursor-default text-sm font-medium text-secondary-foreground',
                props.className
            )}
        />
    )
}

const Description = (props: Primitive.TextProps) => {
    return (
        <Primitive.Text
            {...props}
            slot='description'
            className={cn('text-sm text-muted-foreground', props.className)}
        />
    )
}

const FieldError = (props: Primitive.FieldErrorProps) => {
    return (
        <Primitive.FieldError
            {...props}
            className={cn('text-sm text-danger', props.className)}
        />
    )
}

const fieldGroupStyles = tv({
    base: [
        'group flex h-10 items-center overflow-hidden rounded-lg border border-input bg-background transition disabled:bg-secondary disabled:opacity-50',
        'focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20',
        'focus-within:invalid:border-danger focus-within:invalid:ring-4 focus-within:invalid:ring-danger/20',
        'invalid:border-danger',
        'has-[.atrs]:shrink-0 has-[.isPfx]:pl-2.5 has-[.isSfx]:pr-2.5 has-[.atrs]:text-muted-foreground [&_[data-slot=icon]]:size-4'
    ]
})

const FieldGroup = (props: Primitive.GroupProps) => {
    return (
        <Primitive.Group
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) =>
                    fieldGroupStyles({ ...renderProps, className })
            )}
        />
    )
}

const Input = (props: Primitive.InputProps) => {
    return (
        <Primitive.Input
            {...props}
            className={cn(
                'w-full min-w-0 bg-transparent p-2 text-base text-foreground placeholder-muted-foreground focus:outline-none lg:text-sm',
                props.className
            )}
        />
    )
}

export {
    Description,
    fieldBorderStyles,
    FieldError,
    FieldGroup,
    fieldGroupStyles,
    Input,
    Label
}
