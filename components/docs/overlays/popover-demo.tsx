'use client'

import { Button, Popover, PopoverContent } from 'ui'

export default function App() {
  return (
    <Popover>
      <Button intent="secondary">Forgot Password</Button>
      <PopoverContent className="w-[28rem]">
        <div className="mb-4">
          <h2 className="font-semibold">Email</h2>
          <p className="text-sm text-muted-fg">We'll send you an email to log in.</p>
        </div>
        <div className="flex gap-x-2">
          <Button>Send Login Link</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
