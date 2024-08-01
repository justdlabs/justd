'use client'

import React from 'react'

import { IconCube } from '@irsyadadl/paranoid'
import {
  Button,
  Command,
  CommandDescription,
  CommandEmpty,
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
      <Command
        messageOnEmpty={false}
        hideCloseButton
        hideSearchIndicator
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <CommandInput placeholder="Search for apps and commands..." />
        <CommandEmpty className="grid place-content-center">
          <div className="text-center">
            <IconCube className="inline" />
            <p className="mt-2">No results found.</p>
          </div>
        </CommandEmpty>

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
