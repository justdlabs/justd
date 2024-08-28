"use client"

import * as React from "react"

import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerProps as ColorPickerPrimitiveProps,
  type ColorSpace,
  getColorChannels,
  Group
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Button, ButtonPrimitive } from "./button"
import {
  ColorArea,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  defaultColor
} from "./color"
import { ColorField } from "./color-field"
import { Description, Label } from "./field"
import { Popover } from "./popover"
import { Select } from "./select"

const colorPickerStyles = tv({
  slots: {
    base: "flex w-full flex-col gap-1",
    triggerColorField: "size-10 -mr-2.5 tcf bg-bg grid place-content-center focus:outline-none",
    triggerColorPicker: "w-full hover:bg-tertiary tcp max-w-sm bg-bg justify-start",
    colorArea: "w-full mt-2 sm:mt-0",
    colorSlider: "[&_.cstrk]:orientation-horizontal:h-3",
    colorSwatchPicker: "flex flex-wrap gap-x-2 gap-y-2.5"
  }
})

const { base, triggerColorField, triggerColorPicker, colorArea, colorSlider, colorSwatchPicker } =
  colorPickerStyles()

interface ColorPickerProps extends ColorPickerPrimitiveProps {
  space?: ColorSpace
  enableColorSwatch?: boolean
  enableColorFormatSelection?: boolean
  isHex?: boolean
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  colors?: string[]
  isDisabled?: boolean
  className?: string
  trigger?: "color-picker" | "color-field"
  enableColorField?: boolean
  closeButton?: boolean
}

const zincColors = Object.values({
  "50": "#fafafa",
  "100": "#f4f4f5",
  "200": "#e4e4e7",
  "300": "#d4d4d8",
  "400": "#a1a1aa",
  "500": "#71717a",
  "600": "#52525b",
  "700": "#3f3f46",
  "800": "#27272a",
  "900": "#18181b",
  "950": "#09090b"
})

const ColorPicker = ({
  closeButton = true,
  enableColorSwatch = false,
  enableColorFormatSelection = false,
  enableColorField = true,
  label,
  description,
  colors = [...zincColors],
  placeholder = "Fill Color",
  isDisabled = false,
  className,
  trigger = "color-picker",
  ...props
}: ColorPickerProps) => {
  const [space, setSpace] = React.useState<ColorSpace>("rgb")
  const [isHexFormat, setIsHexFormat] = React.useState(false)
  const value = props.value ?? props.defaultValue
  return (
    <div className={base({ className })}>
      {label && <Label>{label}</Label>}
      <Group>
        <ColorPickerPrimitive defaultValue={defaultColor} {...props}>
          <Popover>
            {trigger === "color-field" ? (
              <ButtonPrimitive aria-label="Color swatch" className={triggerColorField()}>
                <ColorSwatch color={value?.toString(space)} className="size-6" />
              </ButtonPrimitive>
            ) : trigger === "color-picker" ? (
              <Button
                aria-label="Color picker"
                isDisabled={isDisabled}
                appearance="outline"
                className={triggerColorPicker()}
              >
                <ColorSwatch color={value?.toString(space)} className="-ml-1.5 size-6" />
                {value ? <span>{value.toString(space)}</span> : <span>{placeholder}</span>}
              </Button>
            ) : null}
            <Popover.Content
              showArrow={false}
              className="overflow-y-auto sm:min-w-56 w-full sm:max-w-[16rem] px-0 pt-2 pb-3 sm:p-2.5 [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin]"
              {...props}
            >
              <div className="grid gap-2">
                <ColorArea
                  aria-describedby={`${label ? `${label} color area` : "Color slider"}`}
                  className={colorArea()}
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                >
                  <ColorThumb className="z-40" />
                </ColorArea>
                <ColorSlider
                  aria-describedby={`${label ? `${label} color slider` : "Color slider"}`}
                  showOutput={false}
                  className={colorSlider()}
                  colorSpace="hsb"
                  channel="hue"
                />

                {enableColorFormatSelection && (
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
                )}

                {enableColorFormatSelection ? (
                  <div className="flex gap-2 max-w-[inherit]">
                    {isHexFormat ? (
                      <ColorField aria-label="Hex color" colorSpace={space} />
                    ) : (
                      getColorChannels(space).map((channel) => (
                        <ColorField
                          aria-describedby={label ?? "Color field"}
                          colorSpace={space}
                          channel={channel}
                          key={channel}
                        />
                      ))
                    )}
                  </div>
                ) : enableColorField ? (
                  <ColorField aria-label={`Color in ${space} format`} colorSpace={space} />
                ) : null}

                {enableColorSwatch && colors && colors.length > 0 && (
                  <ColorSwatchPicker
                    aria-label="Color swatch picker"
                    layout="grid"
                    className={colorSwatchPicker()}
                  >
                    {colors.map((color) => (
                      <ColorSwatchPickerItem key={color} color={color} />
                    ))}
                  </ColorSwatchPicker>
                )}

                {closeButton && (
                  <div className="sm:hidden mt-2.5 mx-auto w-full max-w-[inherit]">
                    <Popover.Close shape="circle" className="w-full">
                      Close
                    </Popover.Close>
                  </div>
                )}
              </div>
            </Popover.Content>
          </Popover>
        </ColorPickerPrimitive>
      </Group>
      {description && <Description>{description}</Description>}
    </div>
  )
}

export { ColorPicker, type ColorPickerProps }
