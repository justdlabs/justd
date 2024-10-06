"use client"

import * as React from "react"

import {
  ColorWheel as ColorWheelPrimitive,
  type ColorWheelProps as ColorWheelPrimitiveProps,
  ColorWheelTrack
} from "react-aria-components"

import { ColorThumb } from "./color-thumb"

export interface ColorWheelProps
  extends Omit<ColorWheelPrimitiveProps, "outerRadius" | "innerRadius"> {}

const ColorWheel = (props: ColorWheelProps) => {
  return (
    <ColorWheelPrimitive {...props} outerRadius={100} innerRadius={74}>
      <ColorWheelTrack
        className="disabled:bg-gray-300 disabled:dark:bg-zinc-800 disabled:forced-colors:bg-[GrayText]"
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled
            ? undefined
            : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      />
      <ColorThumb />
    </ColorWheelPrimitive>
  )
}

export { ColorWheel }
