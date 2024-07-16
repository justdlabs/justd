'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as ButtonPrimitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'inline-flex items-center justify-center hover:brightness-110 pressed:brightness-90 gap-1.5 whitespace-nowrap text-sm font-medium transition focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4',
    variants: {
        variant: {
            primary:
                'bg-primary text-primary-foreground pressed:ring pressed:ring-primary/40 shadow-sm',
            secondary:
                'bg-secondary text-secondary-foreground pressed:ring pressed:ring-secondary/40 shadow-sm',
            danger: 'bg-danger text-danger-foreground pressed:ring pressed:ring-danger/40 shadow-sm',
            success:
                'bg-success text-success-foreground pressed:ring pressed:ring-success/40 shadow-sm',
            info: 'bg-info text-info-foreground pressed:ring pressed:ring-info/40 shadow-sm',
            warning:
                'bg-warning text-warning-foreground pressed:ring pressed:ring-warning/40 shadow-sm',
            dark: 'bg-dark text-dark-foreground pressed:ring pressed:ring-dark/40 shadow-sm',
            outline:
                'border bg-transparent text-foreground shadow-sm hover:bg-muted-foreground pressed:bg-muted',
            ghost: 'text-foreground bg-transparent hover:bg-muted pressed:bg-muted-foreground'
        },
        size: {
            md: 'h-10 px-4 py-2',
            sm: 'h-9 px-3',
            lg: 'h-11 px-8',
            icon: 'h-10 w-10'
        },
        shape: {
            square: 'rounded-md',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        shape: 'square'
    }
})

export interface ButtonProps
    extends ButtonPrimitive.ButtonProps,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, shape, ...props }, ref) => {
        return (
            <ButtonPrimitive.Button
                className={(values) =>
                    cn(
                        buttonVariants({
                            variant,
                            size,
                            shape,
                            className:
                                typeof className === 'function'
                                    ? className(values)
                                    : className
                        })
                    )
                }
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
