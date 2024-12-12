"use client"

import React, { useState } from "react"

import { IconAdjustment } from "justd-icons"
import { Button, Description, Popover, Separator, Slider } from "ui"

export function SliderOnPopoverBlock() {
  const [fontSize, setFontSize] = useState<number>(16)
  const [lineHeight, setLineHeight] = useState<number[]>([1.5, 1.75])
  return (
    <Popover>
      <Button aria-label="Slider on Popover" size="square-petite" appearance="outline">
        <IconAdjustment />
      </Button>
      <Popover.Content>
        <div className="space-y-4">
          <Slider output="tooltip" value={fontSize} onChange={(v) => setFontSize(v as number)} label="Font Size" />
          <Slider
            output="tooltip"
            value={lineHeight}
            onChange={(v) => setLineHeight(v as number[])}
            label="Line Height"
          />
          <Separator />
          <Description className="flex flex-col gap-y-2 [&>strong]:text-fg">
            <strong>Font Size:</strong> {fontSize}
            <strong>Line Height:</strong> {lineHeight[0]} / {lineHeight[1]}
          </Description>
        </div>
      </Popover.Content>
    </Popover>
  )
}
