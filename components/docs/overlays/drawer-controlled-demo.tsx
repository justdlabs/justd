'use client'

import React from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  TextField
} from 'ui'

export default function DrawerControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)} appearance="outline">
        Login
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Login</DrawerTitle>
            <DrawerDescription>
              Please enter your credentials to access your account.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-4">
            <TextField label="Email" isRequired type="email" placeholder="Enter your email" />
            <TextField
              label="Password"
              isRequired
              type="password"
              placeholder="Enter your password"
            />
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
            <Button onPress={() => setIsOpen(false)}>Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
