'use client'

import { IconBrandGithub } from 'justd-icons'
import { buttonStyles, Tooltip, TooltipContent, TooltipTrigger } from 'ui'

export default function TooltipDelayDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip delay={0}>
        <TooltipTrigger
          aria-label="Follow My Twitter"
          className={buttonStyles({
            appearance: 'outline',
            size: 'square-petite'
          })}
        >
          <IconBrandGithub />
        </TooltipTrigger>
        <TooltipContent>Follow me on Github @irsyadadl</TooltipContent>
      </Tooltip>
    </div>
  )
}
