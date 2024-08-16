"use client"

import React from "react"

import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerWithLabelDemo() {
  const [color, setColor] = React.useState(defaultColor)
  return <ColorPicker label="Theme Color" value={color} onChange={setColor} />
}
