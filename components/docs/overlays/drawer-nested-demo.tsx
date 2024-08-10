'use client'

import React from 'react'

import { toast } from 'sonner'
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
  Form,
  Textarea
} from 'ui'

export default function DrawerNestedDemo() {
  const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = React.useState(false)
  const [isProfileSetupDrawerOpen, setIsProfileSetupDrawerOpen] = React.useState(false)
  const [isTyping, setIsTyping] = React.useState(false)

  return (
    <>
      <Button onPress={() => setIsRegistrationDrawerOpen(true)}>Register</Button>

      <Drawer
        isOpen={isRegistrationDrawerOpen}
        onOpenChange={() => setIsRegistrationDrawerOpen(false)}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Confirm Registration</DrawerTitle>
            <DrawerDescription>Please confirm your registration details.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>Cancel</DrawerClose>
            <Button
              onPress={() => {
                setIsProfileSetupDrawerOpen(true)
              }}
            >
              Confirm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isProfileSetupDrawerOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen && isTyping) toast('Profile setup incomplete', { position: 'top-center' })
          setIsProfileSetupDrawerOpen(isOpen)
        }}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Set Up Your Profile</DrawerTitle>
            <DrawerDescription>
              We need a bit more information before you can get started.
            </DrawerDescription>
          </DrawerHeader>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              toast.success('Profile setup complete', { position: 'top-center' })
              setIsProfileSetupDrawerOpen(false)
              setIsRegistrationDrawerOpen(false)
            }}
          >
            <DrawerBody className="space-y-4">
              <Textarea
                isRequired
                label="Bio"
                placeholder="Tell us something about yourself"
                onInput={() => setIsTyping(true)}
              />
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose>Skip for now</DrawerClose>
              <Button type="submit">Complete Setup</Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  )
}
