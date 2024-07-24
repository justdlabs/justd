'use client'

import { Button, Popover, PopoverContent, PopoverDescription, PopoverFooter, PopoverHeader, PopoverTitle } from 'ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <Button>Forgot Password</Button>
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
