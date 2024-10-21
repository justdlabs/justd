"use client"

import { useLocale } from "react-aria-components"

export function Locale({ children }: { children: React.ReactNode }) {
  const { locale, direction } = useLocale()
  return (
    <div lang={locale} dir={direction}>
      {children}
    </div>
  )
}
