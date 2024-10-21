"use client"

import { Button } from "ui"

export default function ButtonIntentDemo() {
  return (
    <div className="flex max-w-sm flex-wrap gap-2">
      <Button>Label</Button>
      <Button intent="secondary">Label</Button>
      <Button intent="danger">Label</Button>
      <Button intent="warning"> Label</Button>
    </div>
  )
}
