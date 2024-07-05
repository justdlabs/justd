'use client'

import { IconBrandGithub, IconBrandTwitter } from '@irsyadadl/paranoid'
import { buttonStyles, Tooltip, TooltipContent, TooltipTrigger } from 'ui'

export default function App() {
  return (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger
          aria-label="Follow My Twitter"
          className={buttonStyles({
            intent: 'secondary'
          })}
        >
          <IconBrandTwitter />
        </TooltipTrigger>
        <TooltipContent>Tollow me on Twitter @irsyadadl</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          aria-label="Follow My Github"
          className={buttonStyles({
            intent: 'secondary'
          })}
        >
          <IconBrandGithub />
        </TooltipTrigger>
        <TooltipContent>Follow me on Github @irsyadadl</TooltipContent>
      </Tooltip>
    </div>
  )
}
