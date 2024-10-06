"use client"

import React from "react"

import {
  ColorSlider as ColorSliderPrimitive,
  type ColorSliderProps as ColorSliderPrimitiveProps,
  SliderOutput,
  SliderTrack
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { ColorThumb } from "./color-thumb"
import { Label } from "./field"
import { ctr } from "./primitive"

const trackStyles = tv({
  base: "group col-span-2 orientation-horizontal:h-6 rounded-lg",
  variants: {
    orientation: {
      horizontal: "w-full h-6",
      vertical: "w-6 h-56 ml-[50%] -translate-x-[50%]"
    },
    isDisabled: {
      true: "opacity-75 bg-muted forced-colors:bg-[GrayText]"
    }
  }
})

interface ColorSliderProps extends ColorSliderPrimitiveProps {
  label?: string
  showOutput?: boolean
}

const ColorSlider = ({ showOutput = true, label, className, ...props }: ColorSliderProps) => {
  return (
    <ColorSliderPrimitive
      {...props}
      data-slot="color-slider"
      className={ctr(
        className,
        "group orientation-horizontal:grid orientation-vertical:flex relative orientation-horizontal:grid-cols-[1fr_auto] orientation-vertical:flex-col orientation-vertical:justify-center orientation-vertical:items-center gap-2 orientation-horizontal:w-56"
      )}
    >
      <div className="flex items-center">
        {label && <Label className="text-sm [grid-area:label]">{label}</Label>}
        {showOutput && <SliderOutput className="text-sm ml-auto [grid-area:output]" />}
      </div>
      <SliderTrack
        className={trackStyles}
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled
            ? undefined
            : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </ColorSliderPrimitive>
  )
}

export { ColorSlider }
