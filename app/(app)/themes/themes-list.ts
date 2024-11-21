import * as themes from "@/app/(app)/themes/theme-names"

export type ThemeProps = keyof typeof themes | "default"
export const themesList = {
  default: themes.justd,
  ...themes
}
