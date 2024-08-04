'use client'

import React from 'react'

import {
  Button,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle
} from 'ui'

export default function SheetControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Profile</Button>
      <SheetOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>User Profile</SheetTitle>
            <SheetDescription>Manage your profile settings and preferences.</SheetDescription>
          </SheetHeader>
          <div className="overflow-y-auto min-h-[calc(var(--visual-viewport-height)-11.5rem)]">
            This is where you can update your username, email, and other personal details.
          </div>
          <SheetFooter>
            <Button appearance="outline" onPress={() => setIsOpen(false)}>
              Close
            </Button>
            <Button>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </>
  )
}
