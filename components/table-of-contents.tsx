'use client'

import React, { Suspense } from 'react'

import { cn } from '@/lib/utils'
import { Heading } from 'react-aria-components'
import { Link, Skeleton } from 'ui'

interface TableOfContentsProps {
    title: string
    url: string
    items?: TableOfContentsProps[]
}

export function TableOfContents({
    className,
    items
}: {
    className?: string
    items: TableOfContentsProps[]
}) {
    const ids = items.flatMap((item) => [
        item.url.split('#')[1],
        ...(item.items ? item.items.map((subItem) => subItem.url.split('#')[1]) : [])
    ])
    const activeId = useActiveItem(ids)
    return (
        <div className={cn('not-prose', className)}>
            <aside className='xl:sticky xl:top-[1.75rem] xl:-mr-6 xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6'>
                <nav aria-labelledby='on-this-page-title' className='w-56'>
                    <Suspense
                        fallback={
                            <div className='space-y-2'>
                                <Skeleton className='h-3 w-20 animate-pulse' />
                                <Skeleton className='h-3 w-32 animate-pulse' />
                                <Skeleton className='h-3 w-12 animate-pulse bg-foreground/50' />
                                <Skeleton className='h-3 w-16 animate-pulse' />
                                <Skeleton className='h-3 w-8 animate-pulse' />
                                <Skeleton className='h-3 w-24 animate-pulse' />
                            </div>
                        }
                    >
                        <>
                            <Heading
                                level={2}
                                className='mb-6 text-base font-semibold leading-7 text-foreground lg:text-lg'
                            >
                                On this page
                            </Heading>
                            {items.length > 0 && (
                                <ul className='flex flex-col gap-y-2.5'>
                                    {items.map((item) => (
                                        <React.Fragment key={item.title}>
                                            <TocLink item={item} activeId={activeId} />
                                            {item.items && item.items.length > 0 && (
                                                <ul className='flex flex-col gap-y-2.5 pl-3'>
                                                    {item.items.map((subItem) => (
                                                        <TocLink
                                                            key={subItem.title}
                                                            item={subItem}
                                                            activeId={activeId}
                                                        />
                                                    ))}
                                                </ul>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </ul>
                            )}
                        </>
                    </Suspense>
                </nav>
            </aside>
        </div>
    )
}

function TocLink({
    item,
    activeId
}: {
    item: TableOfContentsProps
    activeId: string | null
}) {
    return (
        <li>
            <Link
                className={cn(
                    'block font-medium no-underline outline-none lg:text-[0.885rem]',
                    item.url.split('#')[1] === activeId
                        ? 'text-accent'
                        : 'text-foreground'
                )}
                href={item.url}
            >
                {item.title}
            </Link>
        </li>
    )
}

function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = React.useState<string | null>(null)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let bestCandidate: IntersectionObserverEntry | null = null
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        (!bestCandidate ||
                            bestCandidate.intersectionRatio < entry.intersectionRatio)
                    ) {
                        bestCandidate = entry
                    }
                })
                if (bestCandidate) {
                    // @ts-ignore
                    setActiveId(bestCandidate.target.id)
                }
            },
            { rootMargin: '0% 0% -25% 0%', threshold: 0.1 }
        )

        itemIds.forEach((id) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => {
            itemIds.forEach((id) => {
                const element = document.getElementById(id)
                if (element) observer.unobserve(element)
            })
        }
    }, [itemIds, activeId])

    return activeId
}
