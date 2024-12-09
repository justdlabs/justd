"use client"

import * as React from "react"

import { ColorGenerator } from "@/app/(app)/colors/(colors)/color-generator"
import { ColorItem } from "@/app/(app)/colors/(colors)/color-item"
import colors from "@/resources/colors/colors.json"
import { Container } from "ui"

export function ColorPalette() {
  return (
    <div className="bg-muted/30">
      <div className="max-w-7xl sm:px-8 mx-auto">
        <Container intent="constrained" className="sm:border-x bg-bg shadow-fg/10 sm:px-0 lg:px-0 px-0">
          <ColorGenerator />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {Object.keys(colors).map((key) => (
              <ColorItem key={key} color={key as keyof typeof colors} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
