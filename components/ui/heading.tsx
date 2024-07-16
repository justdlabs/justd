'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

export function Heading({ className, level = 1, ...props }: Primitive.HeadingProps) {
    const textSize: Record<number, string> = {
        1: 'text-3xl',
        2: 'text-2xl',
        3: 'text-xl',
        4: 'text-lg',
        5: 'text-md',
        6: 'text-sm'
    }
    return (
        <Primitive.Heading
            level={level}
            className={cn('font-semibold text-foreground', textSize[level], className)}
            {...props}
        />
    )
}

export function Subheading({ className, level = 2, ...props }: Primitive.HeadingProps) {
    return (
        <Primitive.Heading
            level={level}
            {...props}
            className={cn(
                className,
                'text-base/7 font-semibold text-foreground sm:text-sm/6'
            )}
        />
    )
}
