'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Info, TriangleAlert } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const noteStyles = tv({
    base: [
        'relative rounded-lg p-4 ring-1 ring-border dark:ring-inset [&_a:hover]:underline [&_a]:font-medium',
        '[&_svg]:absolute [&_svg]:right-4 [&_svg]:top-4 [&_svg]:size-6'
    ],
    variants: {
        variant: {
            primary:
                'border-primary bg-background leading-4 text-primary ring-primary [&_a]:text-primary [&_svg]:text-primary',
            secondary:
                'border-secondary bg-background leading-4 text-secondary-foreground ring-foreground [&_a]:text-secondary-foreground [&_svg]:text-secondary-foreground',
            info: 'border-info bg-background leading-4 text-info ring-info [&_a]:text-info [&_svg]:text-info',
            warning:
                'border-warning bg-background leading-4 text-warning ring-warning [&_a]:text-warning [&_svg]:text-warning',
            danger: 'border-danger bg-background leading-4 text-danger ring-danger [&_a]:text-danger [&_svg]:text-danger',
            success:
                'border-success bg-background leading-4 text-success ring-success [&_a]:text-success [&_svg]:text-success'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface NoteProps
    extends React.HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof noteStyles> {}

const Note = ({ variant = 'primary', className, ...props }: NoteProps) => {
    return (
        <div className={noteStyles({ variant, className })} {...props}>
            {['info', 'primary', 'secondary'].includes(variant) ? (
                <Info />
            ) : (
                <TriangleAlert />
            )}
            {props.children}
        </div>
    )
}

const NoteTitle = ({ className, ...props }: Primitive.HeadingProps) => {
    return (
        <Primitive.Heading
            className={cn('mb-1 pr-2 font-medium sm:text-base', className)}
            level={3}
            {...props}
        />
    )
}

const NoteDescription = ({ className, ...props }: Primitive.TextProps) => {
    return (
        <Primitive.Text
            slot='description'
            {...props}
            className={cn('text-sm', className)}
        />
    )
}

Note.Title = NoteTitle
Note.Description = NoteDescription

export { Note }
