'use client'

import React from 'react'

import { Button, Sheet, SheetClose, SheetContent, SheetFooter, SheetOverlay } from 'ui'

export default function SheetControlledDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Notifications</Button>
      <SheetOverlay>
        <SheetContent>
          <SheetFooter className="bottom-4 right-4 absolute">
            <SheetClose>Dismiss</SheetClose>
            <Button>Save Preferences</Button>
          </SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  )
}
