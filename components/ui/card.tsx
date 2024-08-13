'use client'

import * as React from 'react'

import type { HeadingProps, TextProps } from 'react-aria-components'
import { Heading } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description } from './field'

const card = tv({
  slots: {
    root: [
      'xrkr bg-background rounded-lg xkd2 [&:has(table)_.ccvgs8x]:border-t [&:has(table)_.x32]:bg-tertiary [&:has(table)]:overflow-hidden border text-fg shadow-sm [&:has(.larhy3):not(:has(.yahnba))>.ccvgs8x]:pt-6 [&:has(.larhy3)]:overflow-hidden [&_table]:overflow-hidden'
    ],
    header: 'flex xlw32 flex-col space-y-1.5 px-6 py-5',
    title: 'text-lg klda font-semibold leading-none tracking-tight',
    description: 'text-base dl2 text-muted-fg sm:text-sm',
    content:
      'yahnba px-6 pb-6 has-[.t-hea]:bg-secondary/40 has-[table]:p-0 [&:has(table)+.ccvgs8x]:py-5 [&:has(table)]:border-t [&_.t-cel]:px-6 [&_.t-col]:px-6',
    footer: 'ccvgs8x flex items-center p-6 pt-0'
  }
})

const { root, header, title, description, content, footer } = card()

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={root({ className })} {...props} />
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={header({ className })} {...props}>
    {props.title && <CardTitle>{props.title}</CardTitle>}
    {props.description && <CardDescription>{props.description}</CardDescription>}
    {!props.title && typeof props.children === 'string' ? <CardTitle {...props} /> : props.children}
  </div>
)

const CardTitle = ({ className, ...props }: HeadingProps) => {
  return <Heading slot="title" className={title({ className })} {...props} />
}

const CardDescription = (props: TextProps) => {
  return <Description className={description({ className: props.className })} {...props} />
}

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={content({ className })} {...props} />
}

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={footer({ className })} {...props} />
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Title = CardTitle

export { Card }
