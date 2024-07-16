'use client'

import React from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const avatarStyles = tv({
    base: [
        'inline-grid shrink-0 bg-secondary align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1',
        'outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]'
    ],
    variants: {
        size: {
            sm: 'size-6',
            md: 'size-8',
            lg: 'size-10'
        },
        shape: {
            square: 'rounded-[--avatar-radius] *:rounded-[--avatar-radius]',
            circle: 'rounded-full *:rounded-full'
        }
    },

    defaultVariants: {
        shape: 'circle',
        size: 'md'
    }
})

interface AvatarProps
    extends React.ComponentPropsWithoutRef<'span'>,
        VariantProps<typeof avatarStyles> {
    src?: string | null
    initials?: string
    alt?: string
    className?: string
}

const avatarGroupStyles = tv({
    base: 'flex items-center justify-center -space-x-2 [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background'
})

interface AvatarGroupProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof avatarGroupStyles> {
    children: React.ReactNode
}

const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
    return <div className={avatarGroupStyles({ className })} {...props} />
}

const Avatar = ({
    src = null,
    initials,
    alt = '',
    className,
    shape,
    size,
    ...props
}: AvatarProps) => {
    return (
        <span
            data-slot='avatar'
            {...props}
            className={avatarStyles({ shape, size, className })}
        >
            {initials && (
                <svg
                    className='select-none fill-current text-[48px] font-medium uppercase'
                    viewBox='0 0 100 100'
                    aria-hidden={alt ? undefined : 'true'}
                >
                    {alt && <title>{alt}</title>}
                    <text
                        x='50%'
                        y='50%'
                        alignmentBaseline='middle'
                        dominantBaseline='middle'
                        textAnchor='middle'
                        dy='.125em'
                    >
                        {initials}
                    </text>
                </svg>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {src && <img src={src} alt={alt} />}
        </span>
    )
}

export { Avatar, AvatarGroup }
