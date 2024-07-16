'use client'

import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Link } from './link'

function Breadcrumbs<T extends object>(props: Primitive.BreadcrumbsProps<T>) {
    return (
        <Primitive.Breadcrumbs {...props} className={cn('flex gap-1', props.className)} />
    )
}

function Breadcrumb(props: Primitive.BreadcrumbProps & Primitive.LinkProps) {
    return (
        <Primitive.Breadcrumb
            {...props}
            className={cn('flex items-center gap-1', props.className)}
        >
            <Link href={props.href} {...props} />
            {props.href && (
                <ChevronRight className='size-4 shrink-0 text-muted-foreground' />
            )}
        </Primitive.Breadcrumb>
    )
}

export { Breadcrumb, Breadcrumbs }
