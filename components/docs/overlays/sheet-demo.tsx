'use client'

import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from 'ui'

export default function SheetDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Open sheet</Button>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        Sheet Body
        <SheetFooter>Sheet Footer</SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
