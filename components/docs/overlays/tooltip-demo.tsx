'use client'

import { IconBrandGithub, IconBrandLayers, IconBrandTwitter } from '@irsyadadl/paranoid'
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
          <IconBrandTwitter />
        </TooltipTrigger>
        <TooltipContent>Tollow me on Twitter @irsyadadl</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          aria-label="Follow My Github"
          className={buttonStyles({
            appearance: 'outline',
            size: 'square-petite'
          })}
        >
          <IconBrandGithub />
        </TooltipTrigger>
        <TooltipContent>Follow me on Github @irsyadadl</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          aria-label="Follow My Layers"
          className={buttonStyles({
            appearance: 'outline',
            size: 'square-petite'
          })}
        >
          <IconBrandLayers />
        </TooltipTrigger>
        <TooltipContent>Follow me on Github irsyad</TooltipContent>
      </Tooltip>
    </div>
  )
}
