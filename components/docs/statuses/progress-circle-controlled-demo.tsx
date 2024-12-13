"use client"

import { useState } from "react"

import { ProgressCircle, Slider } from "ui"

export default function ProgressCircleControlledDemo() {
  const [value, setValue] = useState(10)

  return (
    <div className="flex flex-col gap-y-6 items-center min-w-56">
      <ProgressCircle className="size-10" value={value} />
      <Slider label="Track" value={value} onChange={(v) => setValue(v as number)} />
    </div>
  )
}
