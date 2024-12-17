"use client"

import {
  ColorArea as ColorAreaPrimitive,
  type ColorAreaProps as ColorAreaPropsPrimitive,
} from "react-aria-components"

import { ColorThumb } from "./color-thumb"
import { composeTailwindRenderProps } from "./primitive"

type ColorAreaProps = ColorAreaPropsPrimitive

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
  return (
    <ColorAreaPrimitive
      {...props}
      data-slot="color-area"
      className={composeTailwindRenderProps(
        className,
        "size-56 shrink-0 rounded-md bg-muted forced-colors:bg-[GrayText]",
      )}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb />
    </ColorAreaPrimitive>
  )
}

export { ColorArea }
