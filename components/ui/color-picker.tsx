'use client'

import * as React from 'react'

import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerProps as ColorPickerPrimitiveProps,
  type ColorSpace,
  DialogTrigger,
  getColorChannels,
  Group
} from 'react-aria-components'
import tailwindColors from 'tailwindcss/colors'

import { Button } from './button'
import {
  ColorArea,
  ColorField,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  defaultColor,
  isBrightColor
} from './color'
import { Dialog } from './dialog'
import { Description, Label } from './field'
import { PopoverPicker } from './popover'
import { Select, SelectItem } from './select'

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
}
const ColorPicker = ({
  enableColorSwatch = false,
  enableColorFormatSelection = false,
  label,
  description,
  colors = [...Object.values(tailwindColors.zinc)],
  placeholder = 'Fill Color',
  isHex = true,
  isDisabled = false,
  ...props
}: ColorPickerProps) => {
  const [space, setSpace] = React.useState<ColorSpace>('rgb')
  const [isHexFormat, setIsHexFormat] = React.useState(false)
  return (
    <Group className="flex w-full flex-col gap-1">
      {label && <Label>{label}</Label>}
      <ColorPickerPrimitive defaultValue={defaultColor} {...props}>
        <DialogTrigger>
          <Button isDisabled={isDisabled} appearance="outline" className="w-full max-w-sm justify-start">
            <ColorSwatch isBright={props.value ? isBrightColor(props.value) : false} className="-ml-1.5 size-6" />
            <span>{placeholder}</span>
          </Button>
          <PopoverPicker placement="bottom start" className="w-fit p-0 min-w-fit">
            <Dialog className="w-[17rem] [[data-placement]>&]:p-3">
              <div className="space-y-2">
                <div>
                  <ColorArea className="w-full" colorSpace="hsb" xChannel="saturation" yChannel="brightness">
                    <ColorThumb className="z-50" />
                  </ColorArea>
                  <ColorSlider
                    showOutput={false}
                    className="mt-2 [&_.cstrk]:orientation-horizontal:h-3"
                    colorSpace="hsb"
                    channel="hue"
                  />
                </div>

                <div className="grid gap-2">
                  {enableColorFormatSelection && (
                    <Select
                      selectedKey={space}
                      onSelectionChange={(s) => {
                        setSpace(s as ColorSpace)
                        setIsHexFormat(s === 'hex')
                      }}
                      aria-label="Type of Color"
                    >
                      {['rgb', 'hsl', 'hsb', 'hex'].map((s) => (
                        <SelectItem key={s} id={s} textValue={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </Select>
                  )}

                  {enableColorFormatSelection ? (
                    <div className="flex gap-1 w-[inherit]">
                      {isHexFormat ? (
                        <ColorField colorSpace={space} />
                      ) : (
                        getColorChannels(space).map((channel) => (
                          <ColorField
                            aria-label={channel.toString()}
                            colorSpace={space}
                            channel={channel}
                            key={channel}
                          />
                        ))
                      )}
                    </div>
                  ) : (
                    <ColorField colorSpace={space} />
                  )}
                </div>

                {enableColorSwatch && colors && colors.length > 0 && (
                  <ColorSwatchPicker className="w-[inherit] grid grid-cols-6 gap-x-2 gap-y-2.5">
                    {colors.map((color) => (
                      <ColorSwatchPickerItem key={color} color={color} />
                    ))}
                  </ColorSwatchPicker>
                )}
              </div>
            </Dialog>
          </PopoverPicker>
        </DialogTrigger>
      </ColorPickerPrimitive>
      {description && <Description>{description}</Description>}
    </Group>
  )
}

export { ColorPicker, type ColorPickerProps }
