'use client'

import React, { Suspense } from 'react'

import { Heading } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { cn, Link, Skeleton } from 'ui'

interface TableOfContentsProps {
  title: string
  url: string
  items?: TableOfContentsProps[]
}

export function TableOfContents({ className, items }: { className?: string; items: TableOfContentsProps[] }) {
  const ids = items.flatMap((item) => [
    item.url.split('#')[1],
    ...(item.items ? item.items.map((subItem) => subItem.url.split('#')[1]) : [])
  ])
  const activeId = useActiveItem(ids)
  return (
    <div className={twJoin('not-prose', className)}>
      <aside className="xl:sticky xl:top-[1.75rem] xl:-mr-6 xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" className="w-56">
          <Suspense
            fallback={
              <div className="space-y-2">
                <Skeleton className="h-3 w-20 animate-pulse" />
                <Skeleton className="h-3 w-32 animate-pulse" />
                <Skeleton className="h-3 w-12 animate-pulse bg-fg/50" />
                <Skeleton className="h-3 w-16 animate-pulse" />
                <Skeleton className="h-3 w-8 animate-pulse" />
                <Skeleton className="h-3 w-24 animate-pulse" />
              </div>
            }
          >
            <>
              <Heading level={2} className="text-base lg:text-lg font-semibold leading-7 mb-6 text-fg">
                On this page
              </Heading>
              {items.length > 0 && (
                <ul className="flex flex-col gap-y-2.5">
                  {items.map((item) => (
                    <React.Fragment key={item.title}>
                      <TocLink item={item} activeId={activeId} />
                      {item.items && item.items.length > 0 && (
                        <ul className="flex pl-3 flex-col gap-y-2.5">
                          {item.items.map((subItem) => (
                            <TocLink key={subItem.title} item={subItem} activeId={activeId} />
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

function TocLink({ item, activeId }: { item: TableOfContentsProps; activeId: string | null }) {
  return (
    <li key={item.title}>
      <Link
        className={cn(
          'outline-none block no-underline font-medium lg:text-[0.885rem]',
          item.url.split('#')[1] === activeId ? 'text-fg' : 'text-muted-fg'
        )}
        href={item.url}
      >
        {item.title}
      </Link>
    </li>
  )
}

export function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestCandidate: IntersectionObserverEntry | null = null
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!bestCandidate || bestCandidate.intersectionRatio < entry.intersectionRatio)) {
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
