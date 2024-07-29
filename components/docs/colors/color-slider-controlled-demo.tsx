'use client'

import React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { ColorSlider, defaultColor } from 'ui'

export default function ColorSliderControlledDemo() {
  const [value, setValue] = React.useState(defaultColor)
  return (
    <div className="flex flex-col gap-2">
      <ColorSlider channel="hue" value={value} onChange={setValue} />
      <ControlledValues color={value} />
    </div>
  )
}
