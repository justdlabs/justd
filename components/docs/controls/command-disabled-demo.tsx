'use client'

import React from 'react'

import {
  Button,
  Command,
  CommandDescription,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSection
} from 'ui'

export default function CommandDisabledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandSection heading="Suggestions">
            <CommandItem>
              PhpStorm
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem>
              WebStorm
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem disabled>
              Warp
              <CommandDescription>Need to enable</CommandDescription>
            </CommandItem>
            <CommandItem disabled>
              Sublime Text
              <CommandDescription>Need to enable</CommandDescription>
            </CommandItem>
            <CommandItem>
              VS Code
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem disabled>
              Atom
              <CommandDescription>Killed</CommandDescription>
            </CommandItem>
          </CommandSection>
        </CommandList>
      </Command>
    </>
  )
}
