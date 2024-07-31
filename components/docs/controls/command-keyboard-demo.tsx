'use client'

import React from 'react'

import { Button, Command, CommandInput, CommandItem, CommandKeyboard, CommandList } from 'ui'

export default function CommandKeyboardDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandItem>
            Account Settings
            <CommandKeyboard keys="⌘A" />
          </CommandItem>

          <CommandItem>
            Profile
            <CommandKeyboard keys="⌘P" />
          </CommandItem>

          <CommandItem>
            Notifications
            <CommandKeyboard keys="⌘N" />
          </CommandItem>

          <CommandItem>
            Privacy Settings
            <CommandKeyboard keys="⌘S" />
          </CommandItem>

          <CommandItem>
            Billing Information
            <CommandKeyboard keys="⌘B" />
          </CommandItem>

          <CommandItem>
            Logout
            <CommandKeyboard keys="⌘L" />
          </CommandItem>
        </CommandList>
      </Command>
    </>
  )
}
