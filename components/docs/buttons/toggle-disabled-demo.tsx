'use client'

import React from 'react'

import { IconPin } from '@irsyadadl/paranoid'
import { Toggle } from 'ui'

export default function ToggleDisabledDemo() {
  return (
    <Toggle size="square-petite" isDisabled>
      <IconPin />
    </Toggle>
  )
}
