"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { parseColor } from "@react-stately/color"
import { ColorWheel } from "ui"

export default function ColorWheelControlledDemo() {
  const [color, setColor] = useState(parseColor("hsl(0, 100%, 50%)"))
  return (
    <div className="grid gap-4 justify-center items-center sm:grid-cols-2">
      <div className="grid place-content-center shrink-0">
        <ColorWheel aria-label="Background color" value={color} onChange={setColor} />
      </div>
      <ControlledValues color={color} />
    </div>
  )
}
