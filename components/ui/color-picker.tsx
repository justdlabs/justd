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
import { twJoin } from 'tailwind-merge'
import tailwindColors from 'tailwindcss/colors'

import { Button, ButtonPrimitive } from './button'
import {
  ColorArea,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  defaultColor
} from './color'
import { ColorField } from './color-field'
import { Dialog } from './dialog'
import { DynamicOverlay } from './dynamic-overlay'
import { Description, Label } from './field'
import { cn } from './primitive'
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
  className?: string
  trigger?: 'color-picker' | 'color-field'
  enableColorField?: boolean
}

const ColorPicker = ({
  enableColorSwatch = false,
  enableColorFormatSelection = false,
  enableColorField = true,
  label,
  description,
  colors = [...Object.values(tailwindColors.zinc)],
  placeholder = 'Fill Color',
  isHex = true,
  isDisabled = false,
  className,
  trigger = 'color-picker',
  ...props
}: ColorPickerProps) => {
  const [space, setSpace] = React.useState<ColorSpace>('rgb')
  const [isHexFormat, setIsHexFormat] = React.useState(false)
  const value = props.value ?? props.defaultValue

  return (
    <Group className={cn('flex w-full flex-col gap-1', className)}>
      {label && <Label>{label}</Label>}
      <ColorPickerPrimitive defaultValue={defaultColor} {...props}>
        <DialogTrigger>
          {trigger === 'color-field' ? (
            <ButtonPrimitive className="size-10 -mr-2.5 grid place-content-center focus:outline-none">
              <ColorSwatch color={value?.toString(space)} className="size-6" />
            </ButtonPrimitive>
          ) : trigger === 'color-picker' ? (
            <Button
              aria-label="Open color picker"
              isDisabled={isDisabled}
              appearance="outline"
              className="w-full max-w-sm justify-start"
            >
              <ColorSwatch color={value?.toString(space)} className="-ml-1.5 size-6" />
              {value ? <span>{value.toString(space)}</span> : <span>{placeholder}</span>}
            </Button>
          ) : null}
          <DynamicOverlay
            placement="bottom start"
            role="dialog"
            className="w-full p-0 overflow-hidden min-w-full sm:w-fit sm:min-w-fit"
          >
            <Dialog
              className={twJoin(
                '[[data-placement]>&]:p-[0.70rem] lg:w-[18rem] lg:p-0',
                enableColorField && 'space-y-2'
              )}
            >
              <div>
                <ColorArea
                  className="w-full sm:w-[calc(18rem-1.30rem)]"
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                  aria-label="Color area"
                >
                  <ColorThumb className="z-50" />
                </ColorArea>
                <ColorSlider
                  showOutput={false}
                  className="mt-2 [&_.cstrk]:orientation-horizontal:h-3"
                  colorSpace="hsb"
                  channel="hue"
                  aria-label="Color slider"
                />
              </div>

              <div className="grid gap-2">
                {enableColorFormatSelection && (
                  <Select
                    aria-label="Select color format"
                    selectedKey={space}
                    onSelectionChange={(s) => {
                      setSpace(s as ColorSpace)
                      setIsHexFormat(s === 'hex')
                    }}
                  >
                    {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                      <SelectItem key={s} id={s} textValue={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </Select>
                )}

                {enableColorFormatSelection ? (
                  <div className="flex gap-1 w-[inherit]">
                    {isHexFormat ? (
                      <ColorField aria-label="Hex color" colorSpace={space} />
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
                ) : enableColorField ? (
                  <ColorField aria-label={`Color in ${space} format`} colorSpace={space} />
                ) : null}
              </div>

              {enableColorSwatch && colors && colors.length > 0 && (
                <ColorSwatchPicker layout="grid" className="flex flex-wrap gap-x-2 gap-y-2.5">
                  {colors.map((color) => (
                    <ColorSwatchPickerItem key={color} color={color} />
                  ))}
                </ColorSwatchPicker>
              )}
            </Dialog>
          </DynamicOverlay>
        </DialogTrigger>
      </ColorPickerPrimitive>
      {description && <Description>{description}</Description>}
    </Group>
  )
}

export { ColorPicker, type ColorPickerProps }
