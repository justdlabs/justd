'use client'

import React from 'react'

import { groupedComponents } from '@/app/components/partials/card-list-box'
import { useActiveItem } from '@/components/table-of-contents'
import { goodTitle } from '@/lib/utils'
import { IconHamburger } from '@irsyadadl/paranoid'
import { ListBox, ListBoxItem } from 'react-aria-components'
import { Button, cn, Heading, Menu, MenuContent, MenuItem, useMediaQuery } from 'ui'

const navigations = Object.keys(groupedComponents).map((x) => {
  return {
    text: x,
    href: `#${x}`,
    id: x
  }
})

export function OnThisPage() {
  const activeId = useActiveItem(navigations.map((x) => x.href.split('#')[1]))
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <>
      {isDesktop ? (
        <div className="w-1/6 pt-0 pb-16 shrink-0 sticky top-28">
          <Heading level={2} className="mb-3">
            On this Page
          </Heading>
          <ListBox aria-label="On this page">
            {navigations.map(({ text, href, id }) => (
              <AsideLink key={id} id={id} activeId={activeId || ''} text={text} href={href} />
            ))}
          </ListBox>
        </div>
      ) : (
        <Menu>
          <Button
            aria-label="Open list on this page"
            size="square-petite"
            intent="light/dark"
            className="fixed bottom-4 right-4 z-50"
          >
            <IconHamburger />
          </Button>
          <MenuContent className="w-56" items={navigations} aria-label="On this page">
            {({ text, href, id }) => (
              <MenuItem id={id} href={href}>
                {goodTitle(text)}
              </MenuItem>
            )}
          </MenuContent>
        </Menu>
      )}
    </>
  )
}

export function AsideLink({ text, href, activeId, id }: { id: string; activeId: string; text: string; href: string }) {
  return (
    <ListBoxItem
      className={cn(
        'focus:outline-none focus-visible:font-medium focus-visible:text-fg py-1.5 block hover:text-fg',
        href.split('#')[1] === activeId ? 'text-fg font-medium' : 'text-muted-fg'
      )}
      href={href}
      id={id}
    >
      {goodTitle(text)}
    </ListBoxItem>
  )
}
