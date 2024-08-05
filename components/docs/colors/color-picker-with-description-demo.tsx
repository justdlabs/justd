'use client'

import React from 'react'

import { ColorPicker, defaultColor } from 'ui'

export default function ColorPickerWithDescriptionDemo() {
  const [color, setColor] = React.useState(defaultColor)
  return <ColorPicker label="Theme Color" description="Snag a color for the app theme" value={color} onChange={setColor} />
}
