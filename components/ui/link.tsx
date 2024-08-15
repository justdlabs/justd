'use client'

import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cr } from './primitive'

const linkStyles = tv({
  base: 'forced-colors:outline-[Highlight] focus-visible:outline-2 outline outline-offset-2 disabled:focus-visible:outline-0 outline-0 outline-primary rounded disabled:opacity-60 forced-colors:disabled:text-[GrayText] border-transparent transition-colors disabled:cursor-default',
  variants: {
    intent: {
      unstyled: 'text-fg',
      primary:
        'text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400 forced-colors:disabled:text-[GrayText]',
      danger:
        'text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400 forced-colors:disabled:text-[GrayText]',
      'lad/primary':
        'text-fg hover:text-primary-500 dark:hover:text-primary-400 forced-colors:disabled:text-[GrayText]',
      secondary: 'text-zinc-800 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-white'
    }
  },
  defaultVariants: {
    intent: 'unstyled'
  }
})

interface LinkProps extends LinkPrimitiveProps {
  intent?: 'primary' | 'secondary' | 'danger' | 'lad/primary' | 'unstyled'
}

const Link = ({ className, ...props }: LinkProps) => {
  return (
    <LinkPrimitive
      aria-label={props['aria-label'] ?? 'Link'}
      {...props}
      className={cr(className, (className, ...renderProps) =>
        linkStyles({ ...renderProps, intent: props.intent, className })
      )}
    />
  )
}

export { Link, LinkPrimitive, type LinkPrimitiveProps, type LinkProps }
