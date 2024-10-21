"use client"

import React from "react"

import { parseColor } from "@react-stately/color"
import { ColorPicker } from "ui"

export default function ColorPickerDisabledDemo() {
  const [color, setColor] = React.useState(parseColor("hsl(216, 98%, 52%)"))
  return <ColorPicker isDisabled label="Color Picker" value={color} onChange={setColor} />
}
