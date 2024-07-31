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

export default function CommandDescriptionDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command withoutSearchIndicator closeButton isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search for apps and commands..." />
        <CommandList>
          <CommandSection separator heading="Suggestions">
            <CommandItem>
              PhpStorm
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem>
              WebStorm
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem>
              Warp
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
          </CommandSection>

          <CommandSection separator heading="Applications">
            <CommandItem>
              Terminal
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
            <CommandItem>
              Docker
              <CommandDescription>Application</CommandDescription>
            </CommandItem>
          </CommandSection>

          <CommandSection separator heading="Commands">
            <CommandItem>
              git status
              <CommandDescription>Command</CommandDescription>
            </CommandItem>
            <CommandItem>
              bun add
              <CommandDescription>Command</CommandDescription>
            </CommandItem>
            <CommandItem>
              composer require
              <CommandDescription>Command</CommandDescription>
            </CommandItem>
          </CommandSection>

          <CommandSection heading="System Settings">
            <CommandItem>
              Display Brightness
              <CommandDescription>System Settings</CommandDescription>
            </CommandItem>
            <CommandItem>
              Sound Output
              <CommandDescription>System Settings</CommandDescription>
            </CommandItem>
          </CommandSection>
        </CommandList>
      </Command>
    </>
  )
}
