"use client"

import React from "react"

import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from "react-aria-components"
import { ColorSwatchPicker as ColorSwatchPickerPrimitive, ColorSwatchPickerItem } from "react-aria-components"
import { tv } from "tailwind-variants"

import { ColorSwatch } from "./color-swatch"
import { composeTailwindRenderProps, focusRing } from "./primitive"

const ColorSwatchPicker = ({ children, className, layout = "grid", ...props }: ColorSwatchPickerProps) => {
  return (
    <ColorSwatchPickerPrimitive
      layout={layout}
      {...props}
      className={composeTailwindRenderProps(className, "flex gap-1")}
    >
      {children}
    </ColorSwatchPickerPrimitive>
  )
}

const itemStyles = tv({
  extend: focusRing,
  base: "relative rounded disabled:opacity-50"
})

const SwatchPickerItem = (props: ColorSwatchPickerItemProps) => {
  return (
    <ColorSwatchPickerItem {...props} className={itemStyles}>
      {({ isSelected }) => (
        <>
          <ColorSwatch />
          {isSelected && (
            <div className="absolute top-0 left-0 w-full h-full ring-1 rounded-md ring-fg/30 outline-hidden rounded-[calc(var(--radius-lg)-3.9px)] ring-inset forced-color-adjust-none" />
          )}
        </>
      )}
    </ColorSwatchPickerItem>
  )
}

ColorSwatchPicker.Item = SwatchPickerItem

export { ColorSwatchPicker }
