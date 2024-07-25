'use client'

import { type TooltipProps } from 'react-aria-components'
import { Button, Tooltip, TooltipContent } from 'ui'

type Placement = Pick<TooltipProps, 'placement'>['placement']
const placements: Placement[] = [
  'bottom',
  'bottom left',
  'bottom right',
  'bottom start',
  'bottom end',
  'top',
  'top left',
  'top right',
  'top start',
  'top end',
  'left',
  'left top',
  'left bottom',
  'start',
  'start top',
  'start bottom',
  'right',
  'right top',
  'right bottom',
  'end',
  'end top',
  'end bottom'
]
export default function TooltipPlacementDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 [&_.kbt32x]:w-full">
      {placements.map((placement, idx) => (
        <Tooltip key={idx}>
          <Button className="mx-auto" size="small" appearance="outline">
            {placement}
          </Button>
          <TooltipContent placement={placement}>
            Tooltip shown at <strong>{placement}</strong>.
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
