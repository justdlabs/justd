import * as React from "react"

import { cn } from "@/utils/classes"

export function GeneratedTheme({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div>
      <div className={cn("grid gap-4 lg:gap-6 max-h-48 overflow-y-auto", className)} {...props}>
        <div className="sticky bg-gradient-to-b from-bg to-transparent inset-x-0 from-5% top-0 w-full h-10" />
        <div className="gap-y-6 flex flex-col -mb-12 -mt-12">
          <ColorBox>
            <ColorBoxItem variable="bg" />
            <ColorBoxItem variable="fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="primary" />
            <ColorBoxItem variable="primary-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="secondary" />
            <ColorBoxItem variable="secondary-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="accent" />
            <ColorBoxItem variable="accent-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="muted" />
            <ColorBoxItem variable="muted-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="overlay" />
            <ColorBoxItem variable="overlay-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="success" />
            <ColorBoxItem variable="success-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="warning" />
            <ColorBoxItem variable="warning-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="danger" />
            <ColorBoxItem variable="danger-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="border" />
            <ColorBoxItem variable="input" />
            <ColorBoxItem variable="ring" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="chart-1" />
            <ColorBoxItem variable="chart-2" />
            <ColorBoxItem variable="chart-3" />
            <ColorBoxItem variable="chart-4" />
            <ColorBoxItem variable="chart-5" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="navbar" />
            <ColorBoxItem variable="navbar-fg" />
          </ColorBox>
          <ColorBox>
            <ColorBoxItem variable="sidebar" />
            <ColorBoxItem variable="sidebar-fg" />
          </ColorBox>
        </div>

        <div className="sticky bg-gradient-to-t from-bg to-transparent inset-x-0 from-5% bottom-0 w-full h-10" />
      </div>
    </div>
  )
}

function ColorBox(props: React.ComponentProps<"div">) {
  return <div className="gap-4 lg:gap-2 flex flex-col rounded-md" {...props} />
}

function ColorBoxItem({ variable }: { variable: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="size-5 shrink-0 inset-ring-1 inset-ring-fg/15 rounded-sm"
        style={{ backgroundColor: `var(--${variable})` }}
      />
      <small className="text-xs font-mono">--{variable}</small>
    </div>
  )
}
