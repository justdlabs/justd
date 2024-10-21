"use client"

import React from "react"

import { type ColorSpace, getColorChannels } from "react-aria-components"
import { ColorArea, ColorField, ColorPicker, defaultColor, Select } from "ui"

export default function ColorPickerEnableSelectionFormatDemo() {
  const [color, setColor] = React.useState(defaultColor)
  const [isHexFormat, setIsHexFormat] = React.useState(false)
  const [space, setSpace] = React.useState<ColorSpace>("rgb")
  return (
    <ColorPicker label={color.toString(space)} value={color} onChange={setColor}>
      <>
        <ColorArea />
        <Select
          aria-label="Color Space"
          selectedKey={space}
          defaultSelectedKey={space}
          onSelectionChange={(s) => {
            setSpace(s as ColorSpace)
            setIsHexFormat(s === "hex")
          }}
        >
          <Select.Trigger />
          <Select.List>
            {["rgb", "hex", "hsl", "hsb"].map((s) => (
              <Select.Option key={s} id={s} textValue={s}>
                {s}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
        {isHexFormat ? (
          <ColorField aria-label="Hex color" colorSpace={space} />
        ) : getColorChannels(space).length > 0 ? (
          <div className="flex sm:max-w-56 gap-2">
            {getColorChannels(space).map((channel) => (
              <ColorField colorSpace={space} channel={channel} key={channel} />
            ))}
          </div>
        ) : null}
      </>
    </ColorPicker>
  )
}
