'use client'

import React from 'react'

import { docs } from '#site/content'
import type { Doc, HierarchyNode } from '@/components/aside'
import { createHierarchy } from '@/components/aside'
import { goodTitle } from '@/resources/lib/utils'
import { IconCube, IconHome, IconNotes } from 'justd-icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  CommandMenu,
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
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
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
    <CommandMenu isOpen={open} onOpenChange={setOpen}>
      <CommandMenu.Input autoFocus={isDesktop} placeholder="Quick search..." />
      <CommandMenu.List>
        <CommandMenu.Section separator heading="Pages">
          <CommandMenu.Item value="Home" asChild>
            <Link href="/">
              <IconHome /> Home
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="Docs" asChild>
            <Link href="/docs/getting-started/installation">
              <IconNotes /> Docs
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="Components" asChild>
            <Link href="/components">
              <IconCube /> Components
            </Link>
          </CommandMenu.Item>
        </CommandMenu.Section>

        {filteredNodeEntries.map(([key, value]) => (
          <React.Fragment key={key}>
            <CommandMenu.Section
              key={`${key}-section`}
              heading={key !== 'components' ? goodTitle(key) : undefined}
            >
              {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                typeof subValue === 'object' && 'title' in subValue ? (
                  <CommandMenu.Item
                    value={goodTitle(key + ' ' + (subValue as Doc).title)}
                    className="pl-[2rem] flex justify-between items-center"
                    key={`${key}-${subKey}`}
                    onSelect={() => router.push(`/${subValue.slug}`)}
                  >
                    {goodTitle((subValue as Doc).title)}
                    {subValue.status && (
                      <CommandMenu.Description
                        intent={
                          subValue?.status === 'wip'
                            ? 'warning'
                            : subValue.status === 'beta'
                              ? 'warning'
                              : subValue.status === 'alpha'
                                ? 'danger'
                                : subValue.status === 'new'
                                  ? 'primary'
                                  : 'secondary'
                        }
                        className="uppercase text-[0.65rem]"
                      >
                        {subValue?.status as Doc['status']}
                      </CommandMenu.Description>
                    )}
                  </CommandMenu.Item>
                ) : null
              )}
            </CommandMenu.Section>

            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
              typeof subValue === 'object' && 'title' in subValue ? null : (
                <CommandMenu.Section
                  key={`${key}-${subKey}-section`}
                  value={goodTitle(subKey)}
                  heading={goodTitle(subKey)}
                >
                  {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                    typeof childValue === 'object' && 'title' in childValue ? (
                      <CommandMenu.Item
                        className="justify-between"
                        value={
                          childValue.title === 'Text Field'
                            ? 'Text Field Input'
                            : goodTitle(subKey + ' ' + (childValue as Doc).title)
                        }
                        key={`${key}-${subKey}-${childKey}`}
                        onSelect={() => router.push(`/${childValue.slug}`)}
                      >
                        {goodTitle((childValue as Doc).title)}
                        {childValue.status && (
                          <CommandMenu.Description
                            intent={
                              childValue?.status === 'wip'
                                ? 'primary'
                                : childValue.status === 'beta'
                                  ? 'warning'
                                  : childValue.status === 'alpha'
                                    ? 'danger'
                                    : childValue.status === 'new'
                                      ? 'primary'
                                      : 'secondary'
                            }
                            className="uppercase text-[0.65rem]"
                          >
                            {childValue?.status as Doc['status']}
                          </CommandMenu.Description>
                        )}
                      </CommandMenu.Item>
                    ) : null
                  )}
                </CommandMenu.Section>
              )
            )}
          </React.Fragment>
        ))}
      </CommandMenu.List>
    </CommandMenu>
  )
}
