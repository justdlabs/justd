"use client"

import title from "title"
import { Button, buttonStyles } from "ui"

type Appearance = keyof typeof buttonStyles.variants.appearance

export default function ButtonAppearanceDemo() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:flex-wrap">
      {Object.keys(buttonStyles.variants.appearance).map((appearance) => (
        <div key={appearance}>
          <Button appearance={appearance as Appearance}>{title(appearance)}</Button>
        </div>
      ))}
    </div>
  )
}
