'use client'

import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetTitle } from 'ui'

export default function SheetBasicDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Open sheet</Button>
      <SheetOverlay>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          Sheet Body
          <SheetFooter>Sheet Footer</SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  )
}
