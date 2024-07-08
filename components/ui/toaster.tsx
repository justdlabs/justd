'use client'

import { IconCircleCheckFill, IconCircleInfoFill, IconLoader, IconTriangleInfoFill } from '@irsyadadl/paranoid'
import { useTheme } from 'next-themes'
import React from 'react'
import { Toaster as Sonner } from 'sonner'
import { twJoin } from 'tailwind-merge'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()
  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        className: twJoin(
          'ring-1 p-4 group ring-border rounded-lg gap-x-1 bg-background text-fg flex overflow-hidden w-full text-sm backdrop-blur-xl',
          '[&_svg]:size-5 [&_svg]:mt-1.5'
        ),
        classNames: {
          error: 'ring-red-500/20 dark:ring-red-500/20 bg-danger/10 dark:text-red-50 text-red-950 dark:ring-inset',
          success:
            'ring-emerald-500/30 dark:ring-emerald-500/20 bg-success/10 dark:text-emerald-50 text-emerald-950 dark:ring-inset',
          warning:
            '!ring-amber-500/25 dark:!ring-amber-500/20 bg-warning/10 dark:text-amber-50 text-amber-950 dark:ring-inset',
          info: 'ring-lime-500/30 dark:ring-lime-500/20 bg-lime-500/10 dark:text-lime-50 text-lime-950 dark:ring-inset',
          actionButton: 'py-1 rounded-md text-xs px-2 bg-primary text-primary-fg dark:ring-inset',
          cancelButton: 'py-1 rounded-md text-xs px-2 bg-secondary text-secondary-fg dark:ring-inset'
        }
      }}
      icons={{
        success: <IconCircleCheckFill className="text-success" />,
        info: <IconCircleInfoFill className="text-lime-500" />,
        warning: <IconTriangleInfoFill className="text-amber-500" />,
        error: <IconCircleInfoFill className="text-danger" />,
        loading: <IconLoader className="animate-spin" />
      }}
      {...props}
    />
  )
}

export { Toaster }
