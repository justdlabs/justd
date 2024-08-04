'use client'

import React from 'react'

import { Button, Sheet, SheetContent } from 'ui'

export default function SheetStackDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Stack</Button>
      <SheetContent isStack={false}></SheetContent>
    </Sheet>
  )
}
