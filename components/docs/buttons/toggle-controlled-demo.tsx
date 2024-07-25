'use client'

import React from 'react'

import { IconPin, IconUnpin } from '@irsyadadl/paranoid'
import { Toggle } from 'ui'

export default function ToggleControlledDemo() {
  const [isSelected, setSelected] = React.useState(false)
  return (
    <Toggle isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? <IconUnpin /> : <IconPin />}</>}
    </Toggle>
  )
}
