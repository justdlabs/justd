"use client"

import { IconMoon, IconSun } from "justd-icons"
import { useTheme } from "next-themes"
import { Button, cn } from "ui"

export function ThemeSwitcher({
  shape = "square",
  appearance = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      shape={shape}
      appearance={appearance}
      size="square-petite"
      className={cn("[&_[data-slot=icon]]:text-fg", className)}
      aria-label={"Switch to " + resolvedTheme === "light" ? "dark" : "light" + "mode"}
      onPress={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      {...props}
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
