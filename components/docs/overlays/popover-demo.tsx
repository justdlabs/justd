'use client'

import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle
} from 'ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <Button intent="secondary">Forgot Password</Button>
      <PopoverContent className="w-[28rem]">
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
