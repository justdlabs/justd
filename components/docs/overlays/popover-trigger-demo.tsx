'use client'

import { Avatar, Button, Popover, PopoverContent, PopoverDescription, PopoverFooter, PopoverHeader, PopoverTitle, PopoverTrigger } from 'ui'

export default function PopoverTriggerDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar src="https://github.com/irsyadadl.png" />
      </PopoverTrigger>
      <PopoverContent className="min-w-72">
        <PopoverHeader>
          <PopoverTitle>Email</PopoverTitle>
          <PopoverDescription>We'll send you an email to log in.</PopoverDescription>
        </PopoverHeader>
        <PopoverFooter>
          <Button>Send Login Link</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
