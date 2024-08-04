'use client'

import React from 'react'

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle
} from 'ui'

export default function SheetStackDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Stack</Button>
      <SheetOverlay>
        <SheetContent isStack={false}></SheetContent>
      </SheetOverlay>
    </Sheet>
  )
}
