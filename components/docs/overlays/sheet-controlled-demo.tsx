'use client'

import React from 'react'

import { Button, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetTitle } from 'ui'

export default function SheetControlledDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setOpen(true)}>
        Open sheet
      </Button>
      <SheetOverlay isOpen={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          Sheet Body
          <SheetFooter>Sheet Footer</SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </>
  )
}
