import * as React from "react"

export function GeneratedColor() {
  return (
    <div>
      <div className="grid-cols-2 lg:grid-cols-4 items-start gap-4 lg:gap-6 gap grid">
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
        <ColorBoxItem variable="border" />
        <ColorBoxItem variable="input" />
        <ColorBoxItem variable="ring" />
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
