"use client"

import { type TooltipProps } from "react-aria-components"
import { Button, Popover } from "ui"

type Placement = Pick<TooltipProps, "placement">["placement"]
const placements: Placement[] = ["bottom", "top", "left", "start", "right", "end"]
export default function PopoverPlacementDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 [&_.kbt32x]:w-full">
      {placements.map((placement, idx) => (
        <Popover key={idx}>
          <Button className="mx-auto" size="small" appearance="outline">
            {placement}
          </Button>
          <Popover.Content placement={placement}>Popover shown at {placement}.</Popover.Content>
        </Popover>
      ))}
    </div>
  )
}
