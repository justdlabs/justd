'use client'

import React from 'react'
import { cn } from './primitive'

type AvatarProps = {
  src?: string | null
  square?: boolean
  initials?: string
  alt?: string
  className?: string
}

const Avatar = ({
  src = null,
  square = false,
  initials,
  alt = '',
  className,
  ...props
}: AvatarProps & React.ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      data-slot="avatar"
      {...props}
      className={cn(
        // Basic layout
        'inline-grid shrink-0 bg-secondary align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1',
        'loo2ppvkxrcah38e outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]',
        // Add the correct border radius
        square ? 'rounded-[--avatar-radius] *:rounded-[--avatar-radius]' : 'rounded-full *:rounded-full',
        'size-8',
        className
      )}
    >
      {initials && (
        <svg
          className="select-none fill-current text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : 'true'}
        >
          {alt && <title>{alt}</title>}
          <text x="50%" y="50%" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle" dy=".125em">
            {initials}
          </text>
        </svg>
      )}
      {src && <img src={src} alt={alt} />}
    </span>
  )
}

export { Avatar }
