'use client'

import React from 'react'

import {
  Avatar,
  Button,
  Command,
  CommandDescription,
  CommandInput,
  CommandItem,
  CommandList
} from 'ui'

export default function CommandControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command onValueChange={setValue} value={value} isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput defaultValue={value} placeholder="Quick search..." />
        <CommandList>
          {users.map((user) => (
            <CommandItem key={user.id} value={user.id.toString()}>
              <Avatar src={user.image_url} />
              {user.name}{' '}
              {user.id.toString() === value && (
                <CommandDescription>Selected: {value}</CommandDescription>
              )}
            </CommandItem>
          ))}
        </CommandList>
      </Command>
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
