'use client'

import React from 'react'

import { IconCube } from '@irsyadadl/paranoid'
import {
  Button,
  CommandMenu,
  CommandMenuDescription,
  CommandMenuEmpty,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSection
} from 'ui'

export default function CommandMenuDescriptionDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu
        messageOnEmpty={false}
        hideCloseButton
        hideSearchIndicator
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <CommandMenuInput placeholder="Search for apps and commands..." />
        <CommandMenuEmpty className="grid place-content-center">
          <div className="text-center">
            <IconCube className="inline" />
            <p className="mt-2">No results found.</p>
          </div>
        </CommandMenuEmpty>

        <CommandMenuList>
          <CommandMenuSection separator heading="Suggestions">
            <CommandMenuItem>
              PhpStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              WebStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              Warp
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection separator heading="Applications">
            <CommandMenuItem>
              Terminal
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              Docker
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection separator heading="Commands">
            <CommandMenuItem>
              git status
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              bun add
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              composer require
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection heading="System Settings">
            <CommandMenuItem>
              Display Brightness
              <CommandMenuDescription>System Settings</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem>
              Sound Output
              <CommandMenuDescription>System Settings</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
