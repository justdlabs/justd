"use client"

import React from "react"

import { Button, Drawer } from "ui"

export default function DrawerControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer</Drawer.Title>
            <Drawer.Description>
              A slide-in overlay for extra content or options.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Drawer.Close>Close</Drawer.Close>
            <Button>Done</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
