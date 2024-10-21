"use client"

import React from "react"

import { parseColor } from "@react-stately/color"
import { ColorPicker } from "ui"

export default function ColorPickerDemo() {
  const [color, setColor] = React.useState(parseColor("#0d6efd"))
  return <ColorPicker label="Color Picker" value={color} onChange={setColor} />
}
