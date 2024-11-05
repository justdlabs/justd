"use client"

import { IconDeviceDesktop2, IconMoon, IconSun } from "justd-icons"
import { useTheme } from "next-themes"
import { Button, cn } from "ui"

export function ThemeSwitcher({
  shape = "square",
  appearance = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { resolvedTheme, theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(nextTheme)
  }

  return (
    <Button
      shape={shape}
      appearance={appearance}
      size="square-petite"
      className={cn("[&_[data-slot=icon]]:text-fg", className)}
      aria-label={
        "Switch to " +
        (resolvedTheme === "light" ? "dark" : resolvedTheme === "dark" ? "system" : "light") +
        " mode"
      }
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? (
        <IconSun className="animate-in" />
      ) : theme === "dark" ? (
        <IconMoon className="animate-in" />
      ) : theme === "system" ? (
        <IconDeviceDesktop2 className="animate-in" />
      ) : null}
    </Button>
  )
}
