"use client"

import { Button, buttonStyles, Drawer, TextField } from "ui"

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ appearance: "outline" })}>Login</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Login</Drawer.Title>
          <Drawer.Description>
            Please enter your credentials to access your account.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body className="space-y-4">
          <TextField autoFocus label="Email" placeholder="john.doe@example.com" />
          <TextField label="Password" type="password" placeholder="••••••••••••" />
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close>Cancel</Drawer.Close>
          <Button>Login</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
