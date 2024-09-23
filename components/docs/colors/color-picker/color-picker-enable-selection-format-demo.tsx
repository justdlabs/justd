"use client"

import React from "react"

import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerEnableSelectionFormatDemo() {
  const [color, setColor] = React.useState(defaultColor)
  return <ColorPicker enableColorFormatSelection value={color} onChange={setColor} />
}
