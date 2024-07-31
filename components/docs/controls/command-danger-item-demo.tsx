'use client'

import React from 'react'

import { Button, Command, CommandInput, CommandItem, CommandList, CommandSection } from 'ui'

export default function CommandDangerItemDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandSection>
            <CommandItem>System Shutdown</CommandItem>
            <CommandItem isDanger>Format Disk</CommandItem>
            <CommandItem>Restart Service</CommandItem>
            <CommandItem>Empty Trash</CommandItem>
            <CommandItem>Overwrite File</CommandItem>
            <CommandItem isDanger>Reset Factory Settings</CommandItem>
            <CommandItem>Disconnect Network</CommandItem>
          </CommandSection>
        </CommandList>
      </Command>
    </>
  )
}
