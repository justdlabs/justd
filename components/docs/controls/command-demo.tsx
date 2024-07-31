'use client'

import React from 'react'

import { IconBill, IconCube, IconGear, IconHome, IconNotes, IconShield } from '@irsyadadl/paranoid'
import Link from 'next/link'
import {
  Avatar,
  Button,
  Command,
  CommandInput,
  CommandItem,
  CommandKeyboard,
  CommandList,
  CommandSection
} from 'ui'

export default function CommandDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandSection separator heading="Pages">
            <CommandItem asChild>
              <Link href="#">
                <IconHome /> Home
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconNotes /> Docs
                <CommandKeyboard keys="⌘k" />
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconCube /> Components
              </Link>
            </CommandItem>
          </CommandSection>
          <CommandSection separator heading="Dashboard">
            <CommandItem asChild>
              <Link href="#">
                <IconBill /> Billing
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconGear /> Settings
                <CommandKeyboard keys="⌘s" />
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconShield /> Security
              </Link>
            </CommandItem>
          </CommandSection>
          <CommandSection heading="Team">
            {users.map((user) => (
              <CommandItem key={user.id}>
                <Avatar src={user.image_url} />
                {user.name}
              </CommandItem>
            ))}
          </CommandSection>
        </CommandList>
      </Command>
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
