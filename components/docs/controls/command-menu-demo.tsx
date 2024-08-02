'use client'

import React from 'react'

import { IconBill, IconCube, IconGear, IconHome, IconNotes, IconShield } from '@irsyadadl/paranoid'
import Link from 'next/link'
import {
  Avatar,
  Button,
  CommandMenu,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuKeyboard,
  CommandMenuList,
  CommandMenuSection
} from 'ui'

export default function CommandMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection separator heading="Pages">
            <CommandMenuItem asChild>
              <Link href="#">
                <IconHome /> Home
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconNotes /> Docs
                <CommandMenuKeyboard keys="⌘k" />
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconCube /> Components
              </Link>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection separator heading="Dashboard">
            <CommandMenuItem asChild>
              <Link href="#">
                <IconBill /> Billing
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconGear /> Settings
                <CommandMenuKeyboard keys="⌘s" />
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconShield /> Security
              </Link>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection heading="Team">
            {users.map((user) => (
              <CommandMenuItem key={user.id}>
                <Avatar src={user.image_url} />
                {user.name}
              </CommandMenuItem>
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
  { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' }
]
