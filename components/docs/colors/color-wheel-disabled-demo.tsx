'use client'

import { ColorThumb, ColorWheel, ColorWheelTrack } from 'ui'

export default function ColorWheelDisabledDemo() {
  return (
    <ColorWheel aria-label="Background color is disabled" isDisabled outerRadius={105} innerRadius={78}>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}
