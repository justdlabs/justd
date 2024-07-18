'use client'

import * as React from 'react'

import { IconCircleCheck, IconCircleInfo, IconTriangleInfo } from '@irsyadadl/paranoid'
import { Text } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from './primitive'

const noteStyles = tv({
  base: [
    'my-4 px-5 py-4 overflow-hidden rounded-xl border [&_strong]:font-medium',
    '[&_[data-slot=icon]]:size-5 [&_[data-slot=icon]]:shrink-0'
  ],
  variants: {
    intent: {
      primary: [
        'border-primary-500/20 [&_a]:text-primary-600 text-primary-800 bg-primary-50/50 [&_[data-slot=icon]]:text-primary-600 leading-4',
        'dark:bg-primary-600/10 dark:text-primary-200 dark:[&_a]:text-primary-50 dark:[&_[data-slot=icon]]:text-primary-400'
      ],
      secondary: [
        'border-zinc-500/20 [&_a]:text-zinc-600 text-zinc-900 bg-zinc-50/50 [&_[data-slot=icon]]:text-zinc-500 leading-4',
        'dark:bg-zinc-500/10 dark:text-zinc-200 dark:[&_a]:text-zinc-50 dark:[&_[data-slot=icon]]:text-zinc-50'
      ],
      info: [
        'border-lime-500/20 [&_a]:text-lime-600 text-lime-800 bg-lime-50/50 [&_[data-slot=icon]]:text-lime-500 leading-4',
        'dark:bg-lime-500/10 dark:text-lime-200 dark:[&_a]:text-lime-50 dark:[&_[data-slot=icon]]:text-lime-400'
      ],
      warning: [
        'border-amber-500/20 [&_a]:text-amber-600 text-amber-800 bg-amber-50/50 [&_[data-slot=icon]]:text-amber-500 leading-4',
        'dark:bg-amber-500/10 dark:text-amber-200 dark:[&_a]:text-amber-50 dark:[&_[data-slot=icon]]:text-amber-400'
      ],
      danger: [
        'border-red-500/20 [&_a]:text-red-600 text-red-800 bg-red-50/50 [&_[data-slot=icon]]:text-red-500 leading-4',
        'dark:bg-red-500/10 dark:text-red-200 dark:[&_a]:text-red-50 dark:[&_[data-slot=icon]]:text-red-400'
      ],
      success: [
        'border-emerald-500/20 [&_a]:text-emerald-600 text-emerald-900 bg-emerald-50/50 [&_[data-slot=icon]]:text-emerald-600 leading-4',
        'dark:bg-emerald-500/10 dark:text-emerald-200 dark:[&_a]:text-emerald-50 dark:[&_[data-slot=icon]]:text-emerald-400'
      ]
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

interface NoteProps extends React.HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof noteStyles> {}

const Note = ({ intent = 'secondary', className, ...props }: NoteProps) => {
  return (
    <div className={noteStyles({ intent, className })} {...props}>
      <div className="flex items-start gap-x-3">
        <div className="mt-[3px] w-5">
          {['info', 'primary', 'secondary'].includes(intent) ? (
            <IconCircleInfo />
          ) : intent === 'success' ? (
            <IconCircleCheck />
          ) : (
            <IconTriangleInfo />
          )}
        </div>
        <Text slot="description" {...props} className={cn('text-sm block nd', className)}>
          {props.children}
        </Text>
      </div>
    </div>
  )
}

export { Note, type NoteProps }
