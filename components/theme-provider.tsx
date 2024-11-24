"use client"

import * as React from "react"

import { type ThemeProviderProps, ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider enableSystem storageKey="justd-theme" {...props}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider, useTheme }
