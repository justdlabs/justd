'use client'

import React from 'react'
import { cn } from './primitive'

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props} ref={ref} />
  )
)
Container.displayName = 'Container'

export { Container }
