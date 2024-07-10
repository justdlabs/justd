'use client'

import { composeRenderProps, Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const linkStyles = tv({
  base: 'rounded transition focus:outline-none disabled:cursor-default disabled:no-underline forced-colors:disabled:text-[GrayText]',
  variants: {
    intent: {
      unstyled: 'text-fg',
      primary:
        'text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400 forced-colors:disabled:text-[GrayText]',
      'light/dark': 'text-fg hover:text-zinc-700 dark:hover:text-primary-400',
      secondary:
        'text-zinc-700 underline decoration-zinc-700/50 hover:decoration-zinc-700 dark:text-zinc-300 dark:decoration-zinc-300/70 dark:hover:decoration-zinc-300'
    }
  },
  defaultVariants: {
    intent: 'unstyled'
  }
})

interface LinkProps extends LinkPrimitiveProps, VariantProps<typeof linkStyles> {}

function Link({ className, intent, ...props }: LinkProps) {
  return (
    <LinkPrimitive
      {...props}
      className={composeRenderProps(className, (className, ...renderProps) =>
        linkStyles({ ...renderProps, intent, className })
      )}
    />
  )
}

export { Link, LinkPrimitive, type LinkPrimitiveProps, type LinkProps }
