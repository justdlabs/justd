'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'

const Dialog = ({ className, ...props }: Primitive.DialogProps) => {
    return (
        <Primitive.Dialog
            {...props}
            className={cn(
                'relative max-h-[inherit] overflow-y-auto p-4 outline-0 focus:outline-none [[data-placement]>&]:p-4',
                className
            )}
        />
    )
}

export { Dialog }
