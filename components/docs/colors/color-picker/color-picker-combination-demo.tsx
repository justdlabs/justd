"use client"

import React from "react"

import { ColorSpace, getColorChannels } from "react-aria-components"
import { ColorArea, ColorField, ColorPicker, ColorSlider, Select } from "ui"

export default function ColorPickerCombinationDemo() {
  const [space, setSpace] = React.useState<ColorSpace>("rgb")
  return (
    <ColorPicker label="Color picker" defaultValue="#0d6efd">
      <ColorArea colorSpace={space} />
      {getColorChannels(space).map((channel) => (
        <ColorSlider showOutput={false} key={channel} colorSpace={space} channel={channel} />
      ))}
      <Select
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <Select.Trigger />
        <Select.List>
          {["rgb", "hsb", "hsl"].map((s) => (
            <Select.Option key={s} id={s} textValue={s}>
              {s}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
      <div className="flex gap-2 max-w-56">
        {getColorChannels(space).map((channel) => (
          <ColorField key={channel} colorSpace={space} channel={channel} className="w-full" />
        ))}
      </div>
    </ColorPicker>
  )
}
