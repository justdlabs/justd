import { parse, rgb } from "culori"
import ntc from "ntcjs"
import { slugify } from "usemods"

export const getTextColor = (bgColor: string): string => {
  const parsedColor = parse(bgColor)
  if (!parsedColor) {
    throw new Error("Invalid color format")
  }

  const rgbColor = rgb(parsedColor)
  if (!rgbColor) {
    throw new Error("Failed to convert color to RGB")
  }

  const { r, g, b } = rgbColor

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

export const getColorName = (hex: string, slug = true) => {
  const n_match = ntc.name(hex)
  return slug ? slugify(n_match[1]) : n_match[1]
}

export const decreaseLightness = (oklchColor: string, decreaseBy: number): string => {
  const match = oklchColor.match(/oklch\((\d+(\.\d+)?) (\d+(\.\d+)?) (\d+(\.\d+)?)\)/)
  if (!match) throw new Error("Invalid OKLCH color format")

  const [_, l, , c, , h] = match
  const newLightness = Math.max(0, parseFloat(l) - decreaseBy) // Ensure lightness doesn't go below 0

  return `oklch(${newLightness} ${c} ${h})`
}

export const neutralColors = ["slate", "gray", "zinc", "neutral", "stone"]
export const accentColors300 = ["yellow", "lime"]
export const accentColors400 = ["amber", "yellow", "lime", "cyan"]
export const accentColors500 = ["sky", "orange", "rose", "fuchsia", "purple", "violet", "indigo"]
