'use client'

import * as React from 'react'
import type { HeadingProps, TextProps } from 'react-aria-components'
import { Heading } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description } from './field'

const card = tv({
  slots: {
    root: 'rounded-lg xkd2 border bg-card text-fg shadow-sm [&:has(.larhy3):not(:has(.yahnba))>.ccvgs8x]:pt-6 [&:has(.larhy3)]:overflow-hidden [&_table]:overflow-hidden',
    header: 'flex flex-col space-y-1.5 px-6 py-5',
    title: 'text-xl font-semibold leading-none tracking-tight',
    description: 'text-base text-muted-fg sm:text-sm',
    content:
      'yahnba px-6 pb-6 has-[.t-hea]:bg-secondary/40 has-[table]:p-0 [&:has(table)+.ccvgs8x]:py-5 [&:has(table)]:border-t [&_.t-cel]:px-6 [&_.t-col]:px-6',
    footer: 'ccvgs8x flex items-center p-6 pt-0'
  }
})

const { root, header, title, description, content, footer } = card()

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={root({ className })} {...props} />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={header({ className })} {...props} />
)
CardHeader.displayName = 'CardHeader'

function CardTitle(props: HeadingProps) {
  return <Heading className={title({ className: props.className })} {...props} />
}

function CardDescription(props: TextProps) {
  return <Description className={description({ className: props.className })} {...props} />
}

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={content({ className })} {...props} />
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={footer({ className })} {...props} />
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
