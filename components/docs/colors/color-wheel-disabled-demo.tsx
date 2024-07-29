'use client'

import { ColorThumb, ColorWheel, ColorWheelTrack } from 'ui'

export default function ColorWheelDisabledDemo() {
  return (
    <ColorWheel isDisabled outerRadius={105} innerRadius={78}>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}
