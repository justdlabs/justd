'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { AlertCircle, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()
    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className='toaster group'
            toastOptions={{
                unstyled: true,
                className: cn(
                    'group flex w-full gap-x-1 overflow-hidden rounded-lg bg-background p-4 text-sm text-foreground ring-1 ring-border backdrop-blur-xl',
                    '[&_svg]:mt-1.5 [&_svg]:size-5'
                ),
                classNames: {
                    error: 'ring-danger/20 bg-danger/10 text-danger',
                    success: 'ring-success/30 bg-success/10 text-success',
                    warning: 'ring-warning/25 bg-warning/10 text-warning',
                    info: 'ring-info/30 bg-info/10 text-info',
                    actionButton:
                        'py-1 rounded-md text-xs px-2 bg-primary text-primary-foreground',
                    cancelButton:
                        'py-1 rounded-md text-xs px-2 bg-secondary text-secondary-foreground'
                }
            }}
            icons={{
                success: <CheckCircle className='text-success' />,
                info: <AlertCircle className='text-info' />,
                warning: <AlertTriangle className='text-warning' />,
                error: <AlertCircle className='text-danger' />,
                loading: <Loader2 className='animate-spin' />
            }}
            {...props}
        />
    )
}

export { Toaster }
