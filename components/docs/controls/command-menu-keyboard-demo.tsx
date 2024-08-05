'use client'

import React from 'react'

import { Button, CommandMenu, CommandMenuInput, CommandMenuItem, CommandMenuKeyboard, CommandMenuList } from 'ui'

export default function CommandMenuKeyboardDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuItem>
            Account Settings
            <CommandMenuKeyboard keys="⌘A" />
          </CommandMenuItem>

          <CommandMenuItem>
            Profile
            <CommandMenuKeyboard keys="⌘P" />
          </CommandMenuItem>

          <CommandMenuItem>
            Notifications
            <CommandMenuKeyboard keys="⌘N" />
          </CommandMenuItem>

          <CommandMenuItem>
            Privacy Settings
            <CommandMenuKeyboard keys="⌘S" />
          </CommandMenuItem>

          <CommandMenuItem>
            Billing Information
            <CommandMenuKeyboard keys="⌘B" />
          </CommandMenuItem>

          <CommandMenuItem>
            Logout
            <CommandMenuKeyboard keys="⌘L" />
          </CommandMenuItem>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
