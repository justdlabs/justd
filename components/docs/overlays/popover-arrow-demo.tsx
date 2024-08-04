'use client'

import { IconBell } from '@irsyadadl/paranoid'
import { Button, Popover, PopoverContent } from 'ui'

export default function PopoverArrowDemo() {
  return (
    <Popover>
      <Button appearance="outline" size="square-petite">
        <IconBell />
      </Button>
      <PopoverContent showArrow={false} className="min-w-72">
        You have 3 new notifications.
      </PopoverContent>
    </Popover>
  )
}
