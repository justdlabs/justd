"use client"

import React from "react"

import { Button, CommandMenu } from "ui"

export default function CommandMenuDisabledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Input placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section heading="Suggestions">
            <CommandMenu.Item>
              PhpStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              WebStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item disabled>
              Warp
              <CommandMenu.Description>Need to enable</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item disabled>
              Sublime Text
              <CommandMenu.Description>Need to enable</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              VS Code
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item disabled>
              Atom
              <CommandMenu.Description>Killed</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
