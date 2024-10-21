"use client"

import React from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { type Color, parseColor } from "@react-stately/color"
import { ColorField } from "ui"

export default function ColorFieldControlledDemo() {
  const [color, setColor] = React.useState(parseColor("#FAFAFA"))
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
      <ColorField
        className="min-w-56"
        value={color}
        aria-label="Pick a color"
        onChange={(newColor: Color | null) => newColor && setColor(newColor)}
        placeholder="#FAFAFA"
      />
      <ControlledValues color={color} />
    </div>
  )
}
