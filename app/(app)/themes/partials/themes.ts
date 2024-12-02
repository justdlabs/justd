import colors from "@/resources/colors/colors.json"
import { accentColors300, accentColors400, accentColors500, neutralColors } from "@/resources/lib/colors"

type BlackWhite = "white" | "black"

type Shade = keyof (typeof colors)["slate"]
export const getColorValue = (colorKey: string | BlackWhite, shade?: Shade) => {
  if (colorKey === "white") return "oklch(1 0 0)"
  if (colorKey === "black") return "oklch(0 0 0)"
  if (!shade) throw new Error(`Shade is required for colorKey: ${colorKey}`)
  return colors[colorKey as keyof typeof colors][shade]
}

type ForegroundColor = Shade | BlackWhite
const getFgValue = (colorKey: string, fg: ForegroundColor) => {
  if (fg === "white" || fg === "black") return getColorValue(fg)
  return getColorValue(colorKey, fg)
}

export const generateTheme = (selectedColors: Record<string, string>) => {
  const { primary, gray, accent } = selectedColors

  const isNeutralPrimary = neutralColors.includes(primary)
  const isShade400Primary = accentColors400.includes(primary)
  const isShade500Primary = accentColors500.includes(primary)
  const isShade300Primary = accentColors300.includes(primary)

  const isNeutralAccent = neutralColors.includes(accent)
  const isShade400Accent = accentColors400.includes(accent)
  const isShade500Accent = accentColors500.includes(accent)
  const isShade300Accent = accentColors300.includes(accent)

  const determineShade = (
    isNeutral: boolean,
    is500: boolean,
    is300: boolean,
    is400: boolean,
    isDarkMode: boolean = false
  ) => {
    if (isNeutral) return isDarkMode ? "50" : "950" // Adjust for light and dark
    if (is500) return "500"
    if (is300) return "300"
    if (is400) return "400"
    return "600"
  }

  const determineForeground = (isNeutral: boolean, is400: boolean, isDarkMode: boolean = false) => {
    if (isNeutral) return isDarkMode ? "950" : "50"
    return is400 ? "950" : "white"
  }

  const lightPrimary: Shade = determineShade(isNeutralPrimary, isShade500Primary, isShade300Primary, isShade400Primary)
  const lightPrimaryFg: ForegroundColor = determineForeground(isNeutralPrimary, isShade400Primary)

  const darkPrimary: Shade = determineShade(
    isNeutralPrimary,
    isShade500Primary,
    isShade300Primary,
    isShade400Primary,
    true
  )
  const darkPrimaryFg: ForegroundColor = determineForeground(isNeutralPrimary, isShade400Primary, true)

  const lightAccent: Shade = isNeutralAccent
    ? "200"
    : determineShade(isNeutralAccent, isShade500Accent, isShade300Accent, isShade400Accent)
  const lightAccentFg: ForegroundColor = isNeutralAccent
    ? "950"
    : determineForeground(isNeutralAccent, isShade400Accent)

  const darkAccent: Shade = isNeutralAccent
    ? "800"
    : determineShade(isNeutralAccent, isShade500Accent, isShade300Accent, isShade400Accent, true)
  const darkAccentFg: ForegroundColor = isNeutralAccent
    ? "50"
    : determineForeground(isNeutralAccent, isShade400Accent, true)

  const lightPrimaryFgValue = getFgValue(primary, lightPrimaryFg)
  const darkPrimaryFgValue = getFgValue(primary, darkPrimaryFg)
  const lightAccentFgValue = getFgValue(accent, lightAccentFg)
  const darkAccentFgValue = getFgValue(accent, darkAccentFg)

  const chartShadesLight: Array<Shade> = isNeutralPrimary
    ? ["900", "700", "600", "500", "400"]
    : ["600", "400", "300", "200", "100"]

  const chartShadesDark: Array<Shade> = isNeutralPrimary
    ? ["800", "700", "500", "400", "300"]
    : ["700", "500", "400", "300", "200"]

  const lightRingShade = isNeutralPrimary ? "950" : "600"
  const darkRingShade = isNeutralPrimary ? "50" : "600"

  return `:root {
  --bg: ${getColorValue(gray, "50")};
  --fg: ${getColorValue(gray, "950")};
  
  --primary: ${getColorValue(primary, lightPrimary)};
  --primary-fg: ${lightPrimaryFgValue};
  
  --secondary: ${getColorValue(gray, "100")};
  --secondary-fg: ${getColorValue(gray, "950")};
  
  --overlay: ${getColorValue("white")};
  --overlay-fg: ${getColorValue(gray, "950")};
  
  --accent: ${getColorValue(accent, lightAccent)};
  --accent-fg: ${lightAccentFgValue};

  --subtle: ${getColorValue(primary, "100")};
  --subtle-fg: ${getColorValue(primary, "800")};
  
  --success: oklch(0.696 0.17 162.48);
  --success-fg: oklch(97.9% 0.021 166.113);
  
  --info: oklch(0.685 0.169 237.323);
  --info-fg: oklch(0.443 0.11 240.79);
  
  --warning: oklch(81.5% 0.184 86.047);
  --warning-fg: oklch(25.6% 0.066 53.813);
  
  --danger: oklch(0.577 0.245 27.325);
  --danger-fg: oklch(0.971 0.013 17.38);
  
  --border: ${getColorValue(gray, "200")};
  --input: ${getColorValue(gray, "300")};
  --ring: ${getColorValue(primary, lightRingShade)};
  
  --chart-1: ${getColorValue(primary, chartShadesLight[0])};
  --chart-2: ${getColorValue(primary, chartShadesLight[1])};
  --chart-3: ${getColorValue(primary, chartShadesLight[2])};
  --chart-4: ${getColorValue(primary, chartShadesLight[3])};
  --chart-5: ${getColorValue(primary, chartShadesLight[4])};
}

.dark {
  --bg: ${getColorValue(gray, "950")};
  --fg: ${getColorValue(gray, "50")};

  --primary: ${getColorValue(primary, darkPrimary)};
  --primary-fg: ${darkPrimaryFgValue};

  --secondary: ${getColorValue(gray, "800")};
  --secondary-fg: ${getColorValue(gray, "50")};

  --accent: ${getColorValue(accent, darkAccent)};
  --accent-fg: ${darkAccentFgValue};

  --subtle: ${getColorValue(primary, "950")};
  --subtle-fg: ${getColorValue(primary, "200")};
  
  --overlay: ${getColorValue(gray, "950")};
  --overlay-fg: ${getColorValue(gray, "50")};
  
  --success: oklch(0.696 0.17 162.48);
  --success-fg: oklch(97.9% 0.021 166.113);
  
  --info: oklch(0.685 0.169 237.323);
  --info-fg: oklch(0.443 0.11 240.79);
  
  --warning: oklch(81.5% 0.184 86.047);
  --warning-fg: oklch(25.6% 0.066 53.813);
  
  --danger: oklch(0.577 0.245 27.325);
  --danger-fg: oklch(0.971 0.013 17.38);
  
  --border: ${getColorValue(gray, "800")};
  --input: ${getColorValue(gray, "800")};
  --ring: ${getColorValue(primary, darkRingShade)};

  --chart-1: ${getColorValue(primary, chartShadesDark[0])};
  --chart-2: ${getColorValue(primary, chartShadesDark[1])};
  --chart-3: ${getColorValue(primary, chartShadesDark[2])};
  --chart-4: ${getColorValue(primary, chartShadesDark[3])};
  --chart-5: ${getColorValue(primary, chartShadesDark[4])};
}`
}
