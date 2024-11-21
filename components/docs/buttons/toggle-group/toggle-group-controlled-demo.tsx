import React from "react"

import type { Key } from "react-aria-components"
import { Toggle, ToggleGroup } from "ui"

export default function ToggleGroupControlledDemo() {
  const [selected, setSelected] = React.useState(new Set<Key>(["bold"]))

  return (
    <>
      <ToggleGroup selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        <Toggle id="bold">Bold</Toggle>
        <Toggle id="italic">Italic</Toggle>
        <Toggle id="underline">Underline</Toggle>
      </ToggleGroup>
      {[...selected].length > 0 && (
        <p className="text-muted-fg mt-4">
          Selected: <strong className="text-fg font-semibold">{[...selected].join(", ")}</strong>
        </p>
      )}
    </>
  )
}
