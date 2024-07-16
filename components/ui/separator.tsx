'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

const Separator = (props: Primitive.SeparatorProps) => (
    <Primitive.Separator
        {...props}
        className={cn(
            'bg-border shrink-0',
            props.orientation === 'vertical' ? 'h-full w-px' : 'w-full h-px',
            props.className
        )}
    />
)

export { Separator }
