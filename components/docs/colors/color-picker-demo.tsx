"use client"

import React from "react"

import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerDemo() {
  const [color, setColor] = React.useState(defaultColor)
  return <ColorPicker label="Color Picker" value={color} onChange={setColor} />
}
