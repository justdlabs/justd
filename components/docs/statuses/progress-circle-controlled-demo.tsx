"use client"

import React from "react"

import { ProgressCircle, Slider } from "ui"

export default function ProgressCircleControlledDemo() {
  const [value, setValue] = React.useState(10)

  return (
    <div className="flex flex-col items-center gap-y-6 min-w-56">
      <ProgressCircle className="size-10" value={value} />
      <Slider label="Track" value={value} onChange={(v) => setValue(v as number)} />
    </div>
  )
}
