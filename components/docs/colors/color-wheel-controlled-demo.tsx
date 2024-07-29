'use client'

import React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { parseColor } from '@react-stately/color'
import { ColorThumb, ColorWheel, ColorWheelTrack } from 'ui'

export default function ColorWheelControlledDemo() {
  const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
  return (
    <div className="grid gap-4 justify-center items-center sm:grid-cols-2">
      <div className="shrink-0 grid place-content-center">
        <ColorWheel value={color} onChange={setColor} outerRadius={105} innerRadius={78}>
          <ColorWheelTrack />
          <ColorThumb />
        </ColorWheel>
      </div>
      <ControlledValues color={color} />
    </div>
  )
}
