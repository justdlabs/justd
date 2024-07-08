'use client'

import { docs } from '@/.velite'
import type { Doc, HierarchyNode } from '@/components/aside'
import { createHierarchy } from '@/components/aside'
import { goodTitle } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {
  Badge,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandModal,
  CommandSection,
  useMediaQuery
} from 'ui'

export interface OpenCloseProps {
  open: boolean
  setOpen?: (isOpen: boolean) => void
}

export function CommandPalette({ open, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const pathname = usePathname()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k') {
        e.preventDefault()
        // @ts-ignore
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [pathname, setOpen])

  React.useEffect(() => {
    if (setOpen) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const data = createHierarchy(docs)
  const filteredNodeEntries = Object.entries(data).sort(([a], [b]) => {
    const order = ['prologue', 'getting-started', 'dark-mode', 'components']
    return order.indexOf(a) - order.indexOf(b)
  })

  return (
    <CommandModal isOpen={open} onOpenChange={setOpen}>
      <CommandInput autoFocus={isDesktop} placeholder="Search Component" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {filteredNodeEntries.map(([key, value]) => (
          <React.Fragment key={key}>
            <CommandSection key={`${key}-section`} heading={goodTitle(key)}>
              {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                typeof subValue === 'object' && 'title' in subValue ? (
                  <CommandItem
                    value={goodTitle(key + ' ' + (subValue as Doc).title)}
                    className="pl-[2rem]"
                    key={`${key}-${subKey}`}
                    onSelect={() => router.push(`/${subValue.slug}`)}
                  >
                    {goodTitle((subValue as Doc).title)}
                  </CommandItem>
                ) : null
              )}
            </CommandSection>
            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
              typeof subValue === 'object' && 'title' in subValue ? null : (
                <CommandSection key={`${key}-${subKey}-section`} value={goodTitle(subKey)} heading={goodTitle(subKey)}>
                  {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                    typeof childValue === 'object' && 'title' in childValue ? (
                      <CommandItem
                        className="justify-between"
                        value={goodTitle(subKey + ' ' + (childValue as Doc).title)}
                        key={`${key}-${subKey}-${childKey}`}
                        onSelect={() => router.push(`/${childValue.slug}`)}
                      >
                        {goodTitle((childValue as Doc).title)}
                        {childValue.status && (
                          <Badge
                            intent={
                              childValue?.status === 'wip'
                                ? 'primary'
                                : childValue.status === 'beta'
                                  ? 'warning'
                                  : childValue.status === 'help'
                                    ? 'warning'
                                    : 'info'
                            }
                            className="lowercase -mr-1 text-xs"
                          >
                            {childValue?.status as Doc['status']}
                          </Badge>
                        )}
                      </CommandItem>
                    ) : null
                  )}
                </CommandSection>
              )
            )}
          </React.Fragment>
        ))}
      </CommandList>
    </CommandModal>
  )
}
