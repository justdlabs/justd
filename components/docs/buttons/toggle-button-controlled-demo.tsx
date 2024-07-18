'use client'

import React from 'react'

import { IconPin, IconUnpin } from '@irsyadadl/paranoid'
import { ToggleButton } from 'ui'

export default function ToggleButtonControlledDemo() {
  const [isSelected, setSelected] = React.useState(false)
  return (
    <ToggleButton isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? <IconUnpin /> : <IconPin />}</>}
    </ToggleButton>
  )
}
