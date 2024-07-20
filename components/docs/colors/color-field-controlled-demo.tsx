import React from 'react'

import { type Color, parseColor } from '@react-stately/color'
import { ColorField } from 'ui'

export default function ColorFieldControlledDemo() {
  const [color, setColor] = React.useState(parseColor('#FAFAFA'))
  return (
    <ColorField
      value={color}
      onChange={(newColor: Color | null) => newColor && setColor(newColor)}
      label="Color"
      placeholder="#FAFAFA"
      description={`Current color value: ${color.toString('hex')}`}
    />
  )
}
