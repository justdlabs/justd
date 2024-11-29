"use client"

import * as React from "react"

import { ColorGenerator } from "@/app/(app)/colors/(colors)/color-generator"
import { ColorItem } from "@/app/(app)/colors/(colors)/color-item"
import _colors from "@/app/(app)/colors/(colors)/colors.json"
import { Container } from "ui"

export type FilteredColors = {
  name: string
  children: {
    shade: string
    color: string
  }[]
}[]

const filteredColors: FilteredColors = _colors.map(([name, colorShades]) => ({
  name: typeof name === "string" ? name : Object.values(name).join(", "),
  children: Object.entries(colorShades).map(([shade, color]) => ({
    shade,
    color
  }))
}))

export function ColorPalette() {
  return (
    <div className="bg-muted/30">
      <div className="max-w-7xl sm:px-8 mx-auto">
        <Container intent="constrained" className="sm:border-x bg-bg shadow-fg/10 sm:px-0 lg:px-0 px-0">
          <ColorGenerator />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {filteredColors.map((color, i) => (
              <ColorItem key={i} color={color} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
