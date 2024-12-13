"use client"

import { ColorSlider } from "ui"

export default function ColorSliderVerticalDemo() {
  return (
    <div className="flex justify-center items-center">
      <ColorSlider orientation="vertical" aria-label="Fill Color" channel="hue" defaultValue="hsl(0, 100%, 50%)" />
    </div>
  )
}
