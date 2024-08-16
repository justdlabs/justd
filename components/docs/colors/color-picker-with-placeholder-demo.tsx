"use client"

import React from "react"

import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerWithPlaceholderDemo() {
  const [color, setColor] = React.useState(defaultColor)
  return <ColorPicker placeholder="Select a color" value={color} onChange={setColor} />
}
