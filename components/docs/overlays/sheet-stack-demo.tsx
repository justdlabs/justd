'use client'

import React from 'react'

import { Button, Sheet } from 'ui'

export default function SheetStackDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Stack</Button>
      <Sheet.Content isStack={false}>
        <Sheet.Header>
          <Sheet.Title>Not Stacked</Sheet.Title>
          <Sheet.Description>This sheet is not stacked.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Footer>
          <Sheet.Close>Cancel</Sheet.Close>
          <Button intent="primary">Save Changes</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
