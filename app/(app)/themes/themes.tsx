'use client'

import React from 'react'

import { Button, Container } from 'ui'

import { Blocks } from './blocks'
import type { ThemeProps } from './themes-list'
import { themesList } from './themes-list'

export function Themes() {
  const themeContainerRef = React.useRef<HTMLDivElement>(null)
  const applyTheme = (theme: ThemeProps) => {
    const themeVars = themesList[theme].root
    const darkThemeVars = themesList[theme].dark

    const themeElement = themeContainerRef.current
    if (themeElement) {
      Object.keys(themeVars).forEach((key) => {
        themeElement.style.setProperty(key, themeVars[key])
      })

      if (document.documentElement.classList.contains('dark')) {
        Object.keys(darkThemeVars).forEach((key) => {
          themeElement.style.setProperty(key, darkThemeVars[key])
        })
      }
    }
    localStorage.setItem('theme-id', theme)
  }
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme-id') as ThemeProps
    if (savedTheme) {
      applyTheme(savedTheme)
    }
  }, [])
  return (
    <div ref={themeContainerRef}>
      <Container className="sm:py-16 bg-background py-8">
        <div className="flex border rounded-lg p-2 mb-2 items-center gap-2">
          <Button appearance="outline" onPress={() => applyTheme('default')}>
            Default
          </Button>
          <Button appearance="outline" onPress={() => applyTheme('zinc')}>
            Zinc
          </Button>
          <Button appearance="outline" onPress={() => applyTheme('slate')}>
            Slate
          </Button>
        </div>
        <Blocks />
      </Container>
    </div>
  )
}
