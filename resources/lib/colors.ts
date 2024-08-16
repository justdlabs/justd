import type { FormatOnlyForTailwindVariableType } from "@/resources/types"
import chroma from "chroma-js"
import ntc from "ntcjs"
import { slugify } from "usemods"

const allFormats = [
  { id: 1, format: "hex" },
  { id: 2, format: "hexa" },
  { id: 3, format: "rgb" },
  { id: 4, format: "rgba" },
  { id: 5, format: "hsl" },
  { id: 6, format: "hsla" },
  { id: 7, format: "hsb" },
  { id: 8, format: "hsba" }
] as const

const formatOnlyForTailwindVariable = [
  { id: 1, format: "rgb" },
  { id: 2, format: "rgba" },
  { id: 3, format: "hsl" },
  { id: 4, format: "hsla" },
  { id: 5, format: "hsb" },
  { id: 6, format: "hsba" }
] as const

const formatOnlyForTailwindVariableValues = formatOnlyForTailwindVariable.map(
  (format) => format.format
)

const formatColorForTailwind = (
  colorString: string,
  format: FormatOnlyForTailwindVariableType
): string => {
  return formatOnlyForTailwindVariableValues.includes(format)
    ? colorString
        .replace(/(rgb|rgba|hsl|hsla|hsb|hsba)[(a]?/g, "")
        .replace(/[()]/g, "")
        .replace(/,\s*/g, " ")
        .trim()
    : colorString
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const generateColorScale = (color: string): { shade: number; color: string }[] => {
  const baseColors = [
    chroma(color).brighten(2.5).hex(),
    chroma(color).brighten(2).hex(),
    chroma(color).brighten(1.5).hex(),
    chroma(color).brighten(1).hex(),
    chroma(color).brighten(0.5).hex(),
    color,
    chroma(color).darken(0.5).hex(),
    chroma(color).darken(1.1).hex(),
    chroma(color).darken(1.8).hex(),
    chroma(color).darken(2.5).hex(),
    chroma(color).darken(2.9).hex()
  ]

  return shades.map((shade, index) => ({
    shade,
    color: baseColors[index]
  }))
}

const getColorName = (hex: string, slug = true) => {
  const n_match = ntc.name(hex)
  return slug ? slugify(n_match[1]) : n_match[1]
}

const textColorBasedOnBg = (bgColor: string): string => {
  const luminance = chroma(bgColor).luminance()
  return luminance > 0.3 ? "#000000" : "#FFFFFF"
}

const tailwindColorNames = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
]

export {
  tailwindColorNames,
  getColorName,
  textColorBasedOnBg,
  allFormats,
  formatColorForTailwind,
  formatOnlyForTailwindVariable,
  formatOnlyForTailwindVariableValues,
  generateColorScale,
  type FormatOnlyForTailwindVariableType
}
