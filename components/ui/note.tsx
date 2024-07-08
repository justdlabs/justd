'use client'

import { IconCircleCheckFill, IconCircleInfoFill, IconTriangleInfoFill } from '@irsyadadl/paranoid'
import * as React from 'react'
import { Heading, type HeadingProps, Text, type TextProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from './primitive'

const noteStyles = tv({
  base: [
    'relative rounded-lg ring-1 dark:ring-inset ring-border p-4 [&_a]:font-medium [&_a:hover]:underline',
    '[&_svg]:absolute [&_svg]:right-4 [&_svg]:top-4 [&_svg]:size-6'
  ],
  variants: {
    intent: {
      primary: [
        'ring-primary-500/20 [&_a]:text-primary-600 text-primary-900 bg-primary-50/50 [&_svg]:text-primary-600 leading-4',
        'dark:bg-primary-500/5 dark:text-primary-200 dark:[&_a]:text-primary-50 dark:[&_svg]:text-primary-400'
      ],
      secondary: [
        'ring-zinc-500/20 [&_a]:text-zinc-600 text-zinc-900 bg-zinc-50/50 [&_svg]:text-zinc-500 leading-4',
        'dark:bg-zinc-500/5 dark:text-zinc-200 dark:[&_a]:text-zinc-50 dark:[&_svg]:text-zinc-50'
      ],
      info: [
        'ring-lime-500/20 [&_a]:text-lime-600 text-lime-900 bg-lime-50/50 [&_svg]:text-lime-500 leading-4',
        'dark:bg-lime-500/5 dark:text-lime-200 dark:[&_a]:text-lime-50 dark:[&_svg]:text-lime-400'
      ],
      warning: [
        'ring-amber-500/20 [&_a]:text-amber-600 text-amber-900 bg-amber-50/50 [&_svg]:text-amber-500 leading-4',
        'dark:bg-amber-500/5 dark:text-amber-200 dark:[&_a]:text-amber-50 dark:[&_svg]:text-amber-400'
      ],
      danger: [
        'ring-red-500/20 [&_a]:text-red-600 text-red-900 bg-red-50/50 [&_svg]:text-red-500 leading-4',
        'dark:bg-red-500/5 dark:text-red-200 dark:[&_a]:text-red-50 dark:[&_svg]:text-red-400'
      ],
      success: [
        'ring-emerald-500/20 [&_a]:text-emerald-600 text-emerald-900 bg-emerald-50/50 [&_svg]:text-emerald-600 leading-4',
        'dark:bg-emerald-500/5 dark:text-emerald-200 dark:[&_a]:text-emerald-50 dark:[&_svg]:text-emerald-400'
      ]
    }
  },
  defaultVariants: {
    intent: 'secondary'
  }
})

interface NoteProps extends React.HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof noteStyles> {}

const Note = ({ intent = 'primary', className, ...props }: NoteProps) => {
  return (
    <div className={noteStyles({ intent, className })} {...props}>
      {['info', 'primary', 'secondary'].includes(intent) ? (
        <IconCircleInfoFill />
      ) : intent === 'success' ? (
        <IconCircleCheckFill />
      ) : (
        <IconTriangleInfoFill />
      )}
      {props.children}
    </div>
  )
}

const NoteTitle = ({ className, ...props }: HeadingProps) => {
  return <Heading className={cn('mb-1 pr-2 sm:text-base font-medium', className)} level={3} {...props} />
}

const NoteDescription = ({ className, ...props }: TextProps) => {
  return <Text slot="description" {...props} className={cn('text-sm nd', className)} />
}

export { Note, NoteDescription, NoteTitle }
