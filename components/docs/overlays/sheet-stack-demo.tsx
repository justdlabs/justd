'use client'

import React from 'react'

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from 'ui'

export default function SheetStackDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Stack</Button>
      <SheetContent isStack={false}>
        <SheetHeader>
          <SheetTitle>Not Stacked</SheetTitle>
          <SheetDescription>This sheet is not stacked.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>Cancel</SheetClose>
          <Button intent="primary">Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
