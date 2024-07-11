import React from 'react'

import { type Color, parseColor } from '@react-stately/color'
import { ColorField } from 'ui'

export default function ColorFieldControlledDemo() {
  const [color, setColor] = React.useState(parseColor('#FAFAFA'))
  const handleColorChange = (newColor: Color | null) => {
    if (newColor) {
      setColor(newColor)
    }
  }
  return (
    <ColorField
      value={color}
      onChange={handleColorChange}
      label="Color"
      placeholder="#FAFAFA"
      description={`Current color value: ${color.toString('hex')}`}
    />
  )
}
