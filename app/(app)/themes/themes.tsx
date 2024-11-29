"use client"

import React from "react"

import { Controller } from "@/app/(app)/themes/controller"
import { useTheme } from "next-themes"
import { Container } from "ui"

import { Blocks } from "./blocks"
import type { ThemeProps } from "./themes-list"
import { themesList } from "./themes-list"

export function Themes() {
  const { resolvedTheme } = useTheme()
  const [themeId, setThemeId] = React.useState<ThemeProps>("default")
  const themeContainerRef = React.useRef<HTMLDivElement>(null)

  const applyTheme = (theme: ThemeProps) => {
    setThemeId(theme)
    const themeVars = themesList[theme].root
    const darkThemeVars = themesList[theme].dark
    localStorage.setItem("theme-id", theme)
    const themeElement = themeContainerRef.current
    if (themeElement) {
      const themeVarsToApply = resolvedTheme === "dark" ? darkThemeVars : themeVars
      Object.keys(themeVarsToApply).forEach((key) => {
        themeElement.style.setProperty(key, themeVarsToApply[key as keyof typeof themeVarsToApply])
      })
    }
  }

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme-id") ?? "default"
    applyTheme(savedTheme as ThemeProps)

    if (!localStorage.getItem("theme-id")) {
      localStorage.setItem("theme-id", "default")
    }
  }, [resolvedTheme, themeId])
  return (
    <div>
      <Container className="sm:pt-16 pt-8">
        <Controller themeId={themeId} applyTheme={applyTheme} />
      </Container>
      <div ref={themeContainerRef} className="p-2 sm:p-4 bg-[theme(var(--color-secondary)/80%)] border-y -mb-px">
        <div className="max-w-(--breakpoint-2xl) mx-auto">
          <div className="rounded-xl p-4 sm:p-10 border text-fg">
            <Blocks />
          </div>
        </div>
      </div>
    </div>
  )
}
