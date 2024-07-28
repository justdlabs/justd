'use client'

import React from 'react'

import { IconCheck, IconCircleInfoFill, IconLoader, IconTriangleInfoFill } from '@irsyadadl/paranoid'
import { useTheme } from 'next-themes'
import { Toaster as ToasterPrimitive, type ToasterProps } from 'sonner'
import { twJoin } from 'tailwind-merge'

import { buttonStyles } from './button'

const Toast = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        info: <IconCircleInfoFill />,
        success: <IconCheck />,
        warning: <IconTriangleInfoFill />,
        error: <IconTriangleInfoFill />,
        loading: <IconLoader className="animate-spin size-4" />
      }}
      toastOptions={{
        unstyled: true,
        closeButton: true,
        classNames: {
          toast: twJoin(
            'bg-background ring-1 ring-border dark:ring-inset min-w-[22rem] rounded-xl text-fg overflow-hidden text-[0.925rem] backdrop-blur-xl px-4 py-3 font-normal sm:px-4 sm:py-5',
            '[&:has([data-icon])_[data-content]]:ml-5',
            '[&:has([data-button])_[data-close-button="true"]]:hidden',
            '[&:not([data-description])_[data-title]]:font-normal',
            '[&:has([data-description])_[data-title]]:!font-medium',
            '[&>[data-button]]:absolute [&>[data-button=true]]:bottom-4',
            '[&>[data-action=true]]:right-4',
            '[&>[data-cancel=true]]:left-4'
          ),
          icon: 'absolute top-1/2 -translate-y-1/2',
          content: '[&:not(:has(+button))]:pr-10 [&:has(+button)]:pb-11 md:[&:has(+button)]:pb-9',
          error:
            'bg-danger text-white ring-white/10 text-danger-fg dark:ring-inset [&>[data-close-button=true]>svg]:text-white [&>[data-close-button=true]:hover]:bg-white/20',
          info: 'bg-lime-600 ring-white/10 text-lime-50 dark:ring-inset [&>[data-close-button=true]>svg]:text-white [&>[data-close-button=true]:hover]:bg-white/20',
          warning:
            'bg-warning text-warning-fg ring-white/10 dark:ring-inset [&>[data-close-button=true]>svg]:text-amber-950 [&>[data-close-button=true]:hover]:bg-white/20',
          success:
            'bg-primary text-white ring-white/10 text-primary-fg dark:ring-inset [&>[data-close-button=true]>svg]:text-white [&>[data-close-button=true]:hover]:bg-white/20',
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
            '[&_svg]:size-5 size-8 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-3 left-auto grid place-content-center rounded-md hover:bg-black/20 dark:hover:bg-white/20 border-0 [&_svg]:text-fg'
        }
      }}
      {...props}
    />
  )
}

export { Toast }
