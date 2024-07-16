'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

const Link = (props: Primitive.LinkProps) => (
    <Primitive.Link
        {...props}
        className={cn(
            'rounded transition hover:text-accent focus:outline-none disabled:cursor-default disabled:text-muted-foreground disabled:no-underline',
            props.className
        )}
    />
)

export { Link }
