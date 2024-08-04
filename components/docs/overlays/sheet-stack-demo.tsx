'use client'

import React from 'react'

import { Button, Sheet, SheetContent, SheetOverlay } from 'ui'

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
