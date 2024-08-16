"use client"

import React from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { type Color } from "react-aria-components"
import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerControlledDemo() {
  const [color, setColor] = React.useState(defaultColor)
  const colorChangeHandler = (v: Color) => {
    setColor(v)
  }
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
      <ColorPicker className="min-w-56" value={color} onChange={(v) => colorChangeHandler(v)} />
      <ControlledValues color={color} />
    </div>
  )
}
