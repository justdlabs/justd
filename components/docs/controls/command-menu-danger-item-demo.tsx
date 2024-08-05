'use client'

import React from 'react'

import {
  Button,
  CommandMenu,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSection
} from 'ui'

export default function CommandMenuDangerItemDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection>
            <CommandMenuItem>System Shutdown</CommandMenuItem>
            <CommandMenuItem isDanger>Format Disk</CommandMenuItem>
            <CommandMenuItem>Restart Service</CommandMenuItem>
            <CommandMenuItem>Empty Trash</CommandMenuItem>
            <CommandMenuItem>Overwrite File</CommandMenuItem>
            <CommandMenuItem isDanger>Reset Factory Settings</CommandMenuItem>
            <CommandMenuItem>Disconnect Network</CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
