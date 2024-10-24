"use client"

import { Button, buttonStyles, Drawer } from "ui"

export default function DrawerIsNotCenteredDemo() {
  return (
    <Drawer isCentered={false}>
      <Drawer.Trigger className={buttonStyles({ appearance: "outline" })}>
        Open Drawer
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer</Drawer.Title>
          <Drawer.Description>A slide-in overlay for extra content or options.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus</Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close>Close</Drawer.Close>
          <Button>Done</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
