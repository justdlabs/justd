"use client"

import { Slider } from "ui"

export default function SliderTooltipDemo() {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <div className="flex justify-between items-center w-full text-sm">
        <span>Soft</span>
        <span>Loud</span>
      </div>
      <Slider aria-label="volume" output="tooltip" defaultValue={30} />
    </div>
  )
}
