import React from "react"

import { ColorItem } from "@/app/(app)/colors/(colors)/color-item"
import { getColorName } from "@/resources/lib/colors"
import { type Color as RacColor, parseColor } from "@react-stately/color"
import type { Color } from "culori"
import { formatHex, interpolate, parse } from "culori"
import { ColorField, Heading } from "ui"

export function ColorGenerator() {
  const [value, setValue] = React.useState(parseColor("#0D6DFD"))

  const generateShades = (baseColor: string) => {
    const parsedBase = parse(baseColor.toString())
    if (!parsedBase) {
      throw new Error("Invalid color format. Please use a valid color (e.g., HEX, RGB, or HSL).")
    }

    const lightToDarkScale = interpolate([
      parse(formatHex(interpolate([parse("white") as Color, parsedBase])(0.1))) as Color,
      parsedBase
    ])
    const darkerScale = interpolate([parsedBase, parse("black") as Color])

    const scale = [
      ...Array.from({ length: 9 }, (_, i) => formatHex(lightToDarkScale(i / 8))),
      formatHex(darkerScale(0.15)), // 900 shade
      formatHex(darkerScale(0.5)) // 950 shade
    ]

    return {
      50: scale[0],
      100: scale[1],
      200: scale[2],
      300: scale[3],
      400: scale[4],
      500: scale[5],
      600: scale[6],
      700: scale[7],
      800: scale[8],
      900: scale[9],
      950: scale[10]
    }
  }

  const tailwindShades = generateShades(value.toString())

  const formattedColor = {
    name: getColorName(value.toString("hex"), false) || "Generated Color",
    children: Object.entries(tailwindShades).map(([shade, color]) => ({
      shade,
      color
    }))
  }

  return (
    <div>
      <div className="border-b items-center gap-6">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 border-r">
            <div className="mb-7">
              <Heading level={2}>Generate</Heading>
              <p className="text-muted-fg text-sm">
                Genereate your desired color by picking a shade from the color picker or by entering a hex code.
              </p>
            </div>
            <ColorField
              aria-label="Choose color"
              onChange={(newColor: RacColor | null) => newColor && setValue(newColor)}
              value={value}
            />
          </div>
          <ColorItem color={formattedColor} />
        </div>
      </div>
    </div>
  )
}
