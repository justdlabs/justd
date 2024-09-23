"use client"

import { ColorArea, ColorThumb } from "ui"

export default function ColorAreaChannelDemo() {
  return (
    <ColorArea xChannel="alpha" yChannel="blue">
      <ColorThumb />
    </ColorArea>
  )
}
