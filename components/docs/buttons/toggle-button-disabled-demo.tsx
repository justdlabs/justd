'use client'

import React from 'react'

import { IconPin } from '@irsyadadl/paranoid'
import { ToggleButton } from 'ui'

export default function ToggleButtonDisabledDemo() {
  return (
    <ToggleButton isDisabled>
      <IconPin />
    </ToggleButton>
  )
}
