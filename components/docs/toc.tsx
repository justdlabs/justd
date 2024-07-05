'use client'

import React, { Suspense } from 'react'
import { Heading, Menu, MenuItem } from 'react-aria-components'
import { cn, Skeleton } from 'ui'

export function Toc({ items }: { items: any[] }) {
  const ids = items.map((item) => item.url.split('#')[1])
  const activeId = useActiveItem(ids)
  return (
    <div>
      <aside className="hidden xl:sticky xl:top-[1.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
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
              <Menu className="flex flex-col gap-y-2">
                {items.map((item) => (
                  <MenuItem
                    key={item.title}
                    className={cn('outline-none text-muted-fg lg:text-sm', {
                      'text-primary font-medium': item.url.split('#')[1] === activeId
                    })}
                    id={item.title}
                    href={item.url}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          </Suspense>
        </nav>
      </aside>
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
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
      { rootMargin: '0% 0% -80% 0%', threshold: 0.5 }
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
