"use client"

import React, { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorPicker, defaultColor } from "ui"

export default function ColorPickerControlledDemo() {
  const [color, setColor] = useState(defaultColor)

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
      <ColorPicker value={color} onChange={setColor} />
      <ControlledValues color={color} />
    </div>
  )
}
