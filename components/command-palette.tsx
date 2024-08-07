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
  Badge,
  CommandMenu,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSection,
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
      <CommandMenuInput autoFocus={isDesktop} placeholder="Quick search..." />
      <CommandMenuList>
        <CommandMenuSection separator heading="Pages">
          <CommandMenuItem asChild>
            <Link href="/">
              <IconHome /> Home
            </Link>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <Link href="/docs">
              <IconNotes /> Docs
            </Link>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <Link href="/components">
              <IconCube /> Components
            </Link>
          </CommandMenuItem>
        </CommandMenuSection>

        {filteredNodeEntries.map(([key, value]) => (
          <React.Fragment key={key}>
            <CommandMenuSection
              key={`${key}-section`}
              heading={key !== 'components' ? goodTitle(key) : undefined}
            >
              {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                typeof subValue === 'object' && 'title' in subValue ? (
                  <CommandMenuItem
                    value={goodTitle(key + ' ' + (subValue as Doc).title)}
                    className="pl-[2rem] flex justify-between items-center"
                    key={`${key}-${subKey}`}
                    onSelect={() => router.push(`/${subValue.slug}`)}
                  >
                    {goodTitle((subValue as Doc).title)}
                    {subValue.status && (
                      <Badge
                        intent={
                          subValue?.status === 'wip'
                            ? 'warning'
                            : subValue.status === 'beta'
                              ? 'warning'
                              : subValue.status === 'help'
                                ? 'warning'
                                : subValue.status === 'primitive'
                                  ? 'secondary'
                                  : 'info'
                        }
                        className="uppercase h-5 text-[0.5rem]"
                      >
                        {subValue?.status as Doc['status']}
                      </Badge>
                    )}
                  </CommandMenuItem>
                ) : null
              )}
            </CommandMenuSection>

            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
              typeof subValue === 'object' && 'title' in subValue ? null : (
                <CommandMenuSection
                  key={`${key}-${subKey}-section`}
                  value={goodTitle(subKey)}
                  heading={goodTitle(subKey)}
                >
                  {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                    typeof childValue === 'object' && 'title' in childValue ? (
                      <CommandMenuItem
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
                            className="uppercase h-5 text-[0.5rem]"
                          >
                            {childValue?.status as Doc['status']}
                          </Badge>
                        )}
                      </CommandMenuItem>
                    ) : null
                  )}
                </CommandMenuSection>
              )
            )}
          </React.Fragment>
        ))}
      </CommandMenuList>
    </CommandMenu>
  )
}
