'use client'

import React from 'react'

import {
  Button,
  CommandMenu,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSeparator
} from 'ui'

export default function CommandMenuSeparatorDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuItem asChild>
            <a href="#">Profile Overview</a>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <a href="#">Profile Settings</a>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <a href="#">Security Settings</a>
          </CommandMenuItem>
          <CommandMenuSeparator />
          <CommandMenuItem asChild>
            <a href="#">Notification Preferences</a>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <a href="#">Privacy Settings</a>
          </CommandMenuItem>
          <CommandMenuSeparator />
          <CommandMenuItem asChild>
            <a href="#">Billing Information</a>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <a href="#">Subscription Plans</a>
          </CommandMenuItem>
          <CommandMenuSeparator />
          <CommandMenuItem asChild>
            <a href="#">Connected Apps</a>
          </CommandMenuItem>
          <CommandMenuItem asChild>
            <a href="#">Logout</a>
          </CommandMenuItem>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
