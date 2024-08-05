'use client'

import React from 'react'

import { Button, CommandMenu, CommandMenuDescription, CommandMenuInput, CommandMenuItem, CommandMenuList, CommandMenuSection } from 'ui'

export default function CommandMenuDisabledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection heading="Suggestions">
            <CommandMenuItem>
              PhpStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              WebStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem disabled>
              Warp
              <CommandMenuDescription>Need to enable</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem disabled>
              Sublime Text
              <CommandMenuDescription>Need to enable</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              VS Code
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem disabled>
              Atom
              <CommandMenuDescription>Killed</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
