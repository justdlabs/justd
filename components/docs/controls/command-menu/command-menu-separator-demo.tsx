"use client"

import React from "react"

import { Button, CommandMenu } from "ui"

export default function CommandMenuSeparatorDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Input placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Item asChild>
            <a href="#">Profile Overview</a>
          </CommandMenu.Item>
          <CommandMenu.Item asChild>
            <a href="#">Profile Settings</a>
          </CommandMenu.Item>
          <CommandMenu.Item asChild>
            <a href="#">Security Settings</a>
          </CommandMenu.Item>
          <CommandMenu.Separator />
          <CommandMenu.Item asChild>
            <a href="#">Notification Preferences</a>
          </CommandMenu.Item>
          <CommandMenu.Item asChild>
            <a href="#">Privacy Settings</a>
          </CommandMenu.Item>
          <CommandMenu.Separator />
          <CommandMenu.Item asChild>
            <a href="#">Billing Information</a>
          </CommandMenu.Item>
          <CommandMenu.Item asChild>
            <a href="#">Subscription Plans</a>
          </CommandMenu.Item>
          <CommandMenu.Separator />
          <CommandMenu.Item asChild>
            <a href="#">Connected Apps</a>
          </CommandMenu.Item>
          <CommandMenu.Item asChild>
            <a href="#">Logout</a>
          </CommandMenu.Item>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
