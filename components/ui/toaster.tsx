'use client'

import React from 'react'

import { useTheme } from 'next-themes'
import { Toaster as ToasterPrimitive, type ToasterProps } from 'sonner'
import { twJoin } from 'tailwind-merge'

import { buttonStyles } from './button'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        closeButton: true,
        classNames: {
          toast: twJoin(
            'bg-background ring-1 min-w-[22rem] ring-border rounded-xl text-fg overflow-hidden text-[0.925rem] backdrop-blur-xl px-4 py-3 font-normal sm:px-4 sm:py-5',
            '[&:has([data-button])_[data-close-button="true"]]:hidden',
            '[&:not([data-description])_[data-title]]:font-normal',
            '[&:has([data-description])_[data-title]]:!font-medium',
            '[&>[data-button]]:absolute [&>[data-button=true]]:bottom-4',
            '[&>[data-action=true]]:right-4',
            '[&>[data-cancel=true]]:left-4'
          ),
          icon: 'hidden',
          content: '[&:not(:has(+button))]:pr-10 [&:has(+button)]:pb-11 md:[&:has(+button)]:pb-9',
          error: 'ring-red-500/20 dark:ring-red-500/20 bg-danger/10 dark:text-red-50 text-red-950 dark:ring-inset',
          success:
            'ring-emerald-500/30 dark:ring-emerald-500/20 bg-success/10 dark:text-emerald-50 text-emerald-950 dark:ring-inset',
          warning:
            '!ring-amber-500/25 dark:!ring-amber-500/20 bg-warning/10 dark:text-amber-50 text-amber-950 dark:ring-inset',
          info: 'ring-lime-500/30 dark:ring-lime-500/20 bg-lime-500/10 dark:text-lime-50 text-lime-950 dark:ring-inset',
          cancelButton: buttonStyles({
            className: '',
            size: 'extra-small',
            appearance: 'outline'
          }),
          actionButton: buttonStyles({
            className: 'self-end justify-self-end',
            size: 'extra-small'
          }),
          closeButton:
            '[&_svg]:size-5 size-8 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-4 left-auto grid place-content-center rounded-md hover:bg-black/20 dark:hover:bg-white/20 border-0 [&_svg]:text-fg'
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
