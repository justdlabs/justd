'use client'

import * as React from 'react'

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  composeRenderProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { focusButtonStyles } from './primitive'

const buttonStyles = tv(
  {
    extend: focusButtonStyles,
    base: [
      'kbt32x relative no-underline isolate inline-flex items-center justify-center gap-x-2 border font-medium',
      'forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText] [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-1 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon]'
    ],
    variants: {
      intent: {
        primary: [
          'text-white [--btn-bg:theme(colors.primary.600)] [--btn-border:theme(colors.primary.700/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.primary.200)] active:[--btn-icon:theme(colors.primary.300)] hover:[--btn-icon:theme(colors.primary.300)]'
        ],
        secondary: [
          'text-zinc-950 [--btn-bg:white] [--btn-border:theme(colors.zinc.950/10%)] [--btn-hover-overlay:theme(colors.zinc.950/2.5%)] data-[active]:[--btn-border:theme(colors.zinc.950/15%)] data-[hover]:[--btn-border:theme(colors.zinc.950/15%)]',
          'dark:text-white dark:[--btn-bg:theme(colors.zinc.800)] dark:[--btn-hover-overlay:theme(colors.white/5%)]',
          '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]'
        ],
        success: [
          'text-white [--btn-bg:theme(colors.emerald.600)] [--btn-border:theme(colors.emerald.700/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.white/60%)] active:[--btn-icon:theme(colors.white/80%)] hover:[--btn-icon:theme(colors.white/80%)]'
        ],
        'light/dark': [
          'text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
          'dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:theme(colors.zinc.950/5%)]',
          '[--btn-icon:theme(colors.zinc.400)] active:[--btn-icon:theme(colors.zinc.300)] hover:[--btn-icon:theme(colors.zinc.300)] dark:[--btn-icon:theme(colors.zinc.500)] dark:active:[--btn-icon:theme(colors.zinc.400)] dark:hover:[--btn-icon:theme(colors.zinc.400)]'
        ],
        dark: [
          'text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
          'dark:[--btn-bg:theme(colors.zinc.800)] dark:[--btn-hover-overlay:theme(colors.white/5%)]',
          '[--btn-icon:theme(colors.zinc.400)] active:[--btn-icon:theme(colors.zinc.300)] hover:[--btn-icon:theme(colors.zinc.300)]'
        ],
        light: [
          'text-zinc-950 [--btn-bg:white] [--btn-border:theme(colors.zinc.950/10%)] [--btn-hover-overlay:theme(colors.zinc.950/2.5%)] active:[--btn-border:theme(colors.zinc.950/15%)] hover:[--btn-border:theme(colors.zinc.950/15%)]',
          'dark:[--btn-hover-overlay:theme(colors.zinc.950/5%)]',
          '[--btn-icon:theme(colors.zinc.400)] active:[--btn-icon:theme(colors.zinc.500)] hover:[--btn-icon:theme(colors.zinc.500)]'
        ],
        info: [
          'text-lime-950 [--btn-bg:theme(colors.lime.400)] [--btn-border:theme(colors.lime.400/80%)] [--btn-hover-overlay:theme(colors.white/25%)]',
          '[--btn-icon:theme(colors.lime.600)] active:[--btn-icon:theme(colors.lime.700)] hover:[--btn-icon:theme(colors.lime.700)]'
        ],
        warning: [
          'text-amber-950 [--btn-bg:theme(colors.amber.400)] [--btn-border:theme(colors.amber.500/80%)] [--btn-hover-overlay:theme(colors.white/25%)]',
          '[--btn-icon:theme(colors.amber.600)]'
        ],
        danger: [
          'text-white [--btn-bg:theme(colors.red.600)] [--btn-border:theme(colors.red.700/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
          '[--btn-icon:theme(colors.red.300)] active:[--btn-icon:theme(colors.red.200)] hover:[--btn-icon:theme(colors.red.200)]'
        ]
      },
      appearance: {
        solid:
          'border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-[--btn-hover-overlay] after:hover:bg-[--btn-hover-overlay] dark:after:-inset-px before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none',
        outline:
          'border-border hover:bg-secondary/70 active:bg-secondary/70 text-fg [--btn-icon:theme(colors.zinc.400)] active:[--btn-icon:theme(colors.zinc.500)] hover:[--btn-icon:theme(colors.zinc.500)] dark:active:[--btn-icon:theme(colors.zinc.300)] dark:hover:[--btn-icon:theme(colors.zinc.300)]',
        plain:
          'border-transparent text-fg active:bg-fg/5 hover:bg-fg/5 [--btn-icon:theme(colors.zinc.500)] active:[--btn-icon:theme(colors.zinc.700)] hover:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:active:[--btn-icon:theme(colors.zinc.400)] dark:hover:[--btn-icon:theme(colors.zinc.400)]'
      },
      size: {
        'extra-small':
          'h-8 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.1)-1px)] text-xs/4 lg:text-[0.800rem]/4',
        small: 'h-9 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-sm/5 lg:text-sm/5',
        medium: 'h-10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.2)-1px)] text-base lg:text-sm/6',
        large:
          'h-10 sm:h-11 px-[calc(theme(spacing.4)-1px)] sm:px-[calc(theme(spacing.5)-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base lg:text-base/7 sm:[&>[data-slot=icon]]:size-5',
        'square-petite': 'size-9 shrink-0'
      },
      shape: {
        square:
          'rounded-lg before:rounded-[calc(theme(borderRadius.lg)-1px)] after:rounded-[calc(theme(borderRadius.lg)-1px)] dark:after:rounded-lg',
        circle: 'rounded-[9999px] before:rounded-[9998px] after:rounded-[9998px] dark:after:rounded-[9999px]'
      },
      isDisabled: {
        false: 'forced-colors:disabled:text-[GrayText]',
        true: 'cursor-default opacity-60 forced-colors:disabled:text-[GrayText]'
      }
    },
    defaultVariants: {
      intent: 'primary',
      appearance: 'solid',
      size: 'medium',
      shape: 'square'
    },
    compoundVariants: [
      {
        appearance: ['outline', 'plain'],
        className: 'px-1',
        size: 'extra-small'
      },
      {
        appearance: ['outline', 'plain'],
        className: 'px-[calc(theme(spacing.1)-1px)]',
        size: 'small'
      },
      {
        appearance: ['outline', 'plain'],
        className: 'px-[calc(theme(spacing.2)-1px)]',
        size: 'medium'
      },
      {
        appearance: ['outline', 'plain'],
        className: 'px-[calc(theme(spacing.3)-1px)]',
        size: 'large'
      }
    ]
  },
  {
    responsiveVariants: ['sm', 'md', 'lg', 'xl']
  }
)

interface ButtonProps extends ButtonPrimitiveProps {
  intent?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'light/dark' | 'success' | 'light' | 'dark'
  size?: 'medium' | 'large' | 'square-petite' | 'extra-small' | 'small'
  shape?: 'square' | 'circle'
  appearance?: 'solid' | 'outline' | 'plain'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, appearance, size, shape, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          buttonStyles({
            ...renderProps,
            intent,
            appearance,
            size,
            shape,
            className
          })
        )}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, ButtonPrimitive, buttonStyles, type ButtonProps }
