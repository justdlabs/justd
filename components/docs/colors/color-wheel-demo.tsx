'use client'

import { ColorThumb, ColorWheel, ColorWheelTrack } from 'ui'

export default function ColorWheelDemo() {
  return (
    <ColorWheel outerRadius={105} innerRadius={78}>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}
