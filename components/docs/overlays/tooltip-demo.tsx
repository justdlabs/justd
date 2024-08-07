'use client'

import { IconBrandX } from 'justd-icons'
import { buttonStyles, Tooltip, TooltipContent, TooltipTrigger } from 'ui'

export default function TooltipDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger
          aria-label="Follow My Twitter"
          className={buttonStyles({
            appearance: 'outline',
            size: 'square-petite'
          })}
        >
          <IconBrandX />
        </TooltipTrigger>
        <TooltipContent>Follow me on X @irsyadadl</TooltipContent>
      </Tooltip>
    </div>
  )
}
