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
      true: "opacity-50 bg-muted forced-colors:bg-[GrayText]"
    }
  }
})

interface ColorSliderProps extends ColorSliderPrimitiveProps {
  label?: string
}

const ColorSlider = ({ label, ...props }: ColorSliderProps) => {
  return (
    <ColorSliderPrimitive
      {...props}
      data-slot="color-slider"
      className={ctr(
        props.className,
        "orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-56"
      )}
    >
      <Label>{label}</Label>
      <SliderOutput className="text-sm text-gray-500 dark:text-zinc-400 font-medium orientation-vertical:hidden" />
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
