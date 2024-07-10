import React from 'react'

import { parseColor } from '@react-stately/color'
import { ColorThumb, ColorWheel, ColorWheelTrack } from 'ui'

export default function ColorWheelControlledDemo() {
  const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
  return (
    <ColorWheel value={color} onChange={setColor} outerRadius={105} innerRadius={78}>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}
