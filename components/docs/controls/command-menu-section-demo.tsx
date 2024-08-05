'use client'

import React from 'react'

import { Button, CommandMenu, CommandMenuInput, CommandMenuItem, CommandMenuList, CommandMenuSection, CommandMenuSeparator } from 'ui'

export default function CommandMenuSectionDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection heading="Pages">
            <CommandMenuItem asChild>
              <a href="/">Home</a>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <a href="/docs/getting-started/installation">Docs</a>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <a href="/components">Components</a>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSeparator />
          <CommandMenuSection heading="Users">
            {users.map((user) => (
              <CommandMenuItem key={user.id}>{user.name}</CommandMenuItem>
            ))}
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}

const users = [
  { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Rosemarie Koch', image_url: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Mrs. Reva Heaney Jr.', image_url: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Ms. Ettie Abshire DVM', image_url: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' },
  {
    id: 7,
    name: 'Miss Jacinthe Gerlach DVM',
    image_url: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 8,
    name: 'Miss Stephania Schaefer Sr.',
    image_url: 'https://i.pravatar.cc/150?img=8'
  },
  { id: 9, name: 'Kevon Hackett MD', image_url: 'https://i.pravatar.cc/150?img=9' },
  { id: 10, name: 'Tom Ledner', image_url: 'https://i.pravatar.cc/150?img=10' }
]
