'use client'

import React from 'react'

import { Button, Command, CommandInput, CommandItem, CommandList, CommandSeparator } from 'ui'

export default function CommandSeparatorDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandItem asChild>
            <a href="#">Profile Overview</a>
          </CommandItem>
          <CommandItem asChild>
            <a href="#">Profile Settings</a>
          </CommandItem>
          <CommandItem asChild>
            <a href="#">Security Settings</a>
          </CommandItem>
          <CommandSeparator />
          <CommandItem asChild>
            <a href="#">Notification Preferences</a>
          </CommandItem>
          <CommandItem asChild>
            <a href="#">Privacy Settings</a>
          </CommandItem>
          <CommandSeparator />
          <CommandItem asChild>
            <a href="#">Billing Information</a>
          </CommandItem>
          <CommandItem asChild>
            <a href="#">Subscription Plans</a>
          </CommandItem>
          <CommandSeparator />
          <CommandItem asChild>
            <a href="#">Connected Apps</a>
          </CommandItem>
          <CommandItem asChild>
            <a href="#">Logout</a>
          </CommandItem>
        </CommandList>
      </Command>
    </>
  )
}
