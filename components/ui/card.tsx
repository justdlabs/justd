'use client'

import * as React from 'react'

import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description } from './field'

const card = tv({
    slots: {
        root: 'rounded-md border bg-card text-card-foreground shadow-sm [&_table]:overflow-hidden',
        header: 'flex flex-col space-y-1.5 px-6 py-5',
        title: 'text-xl font-semibold leading-none tracking-tight',
        description: 'text-base text-muted-foreground sm:text-sm',
        content:
            'px-6 pb-6 has-[table]:p-0 [&:has(table)]:border-t [&_.t-cel]:px-6 [&_.t-col]:px-6',
        footer: 'flex items-center p-6 pt-0'
    }
})

const { root, header, title, description, content, footer } = card()

interface CardSubComponents {
    Header: typeof CardHeader
    Title: typeof CardTitle
    Description: typeof CardDescription
    Content: typeof CardContent
    Footer: typeof CardFooter
}

type CardComponent = React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
> &
    React.RefAttributes<HTMLDivElement> &
    CardSubComponents

const Card: CardComponent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={root({ className })} {...props} />
)) as CardComponent
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={header({ className })} {...props} />
    )
)
CardHeader.displayName = 'CardHeader'

function CardTitle(props: Primitive.HeadingProps) {
    return (
        <Primitive.Heading className={title({ className: props.className })} {...props} />
    )
}

function CardDescription(props: Primitive.TextProps) {
    return (
        <Description className={description({ className: props.className })} {...props} />
    )
}

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={content({ className })} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={footer({ className })} {...props} />
    )
)
CardFooter.displayName = 'CardFooter'

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export { Card }
