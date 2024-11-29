"use client"

import { Slider } from "ui"

export default function SliderTooltipDemo() {
  return (
    <div className="flex w-full flex-col gap-y-1">
      <div className="flex items-center w-full justify-between text-sm">
        <span>Soft</span>
        <span>Loud</span>
      </div>
      <Slider aria-label="volume" output="tooltip" defaultValue={30} />
    </div>
  )
}