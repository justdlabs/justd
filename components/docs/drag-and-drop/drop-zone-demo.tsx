'use client'

import React from 'react'

import { DropZone, Label } from 'ui'

export default function DropZoneDemo() {
  let [dropped, setDropped] = React.useState(false)

  return (
    <DropZone onDrop={() => setDropped(true)}>
      <Label>{dropped ? 'Drop nailed' : 'Toss your stuff here'}</Label>
    </DropZone>
  )
}
