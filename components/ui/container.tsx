'use client'

import React from 'react'

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" {...props} ref={ref} />
)
Container.displayName = 'Container'

export { Container }
