'use client'

import { Button, Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader } from 'ui'

export default function SheetClassnamesDemo() {
  return (
    <Sheet>
      <Button>Open</Button>
      <SheetContent
        classNames={{
          overlay: 'bg-white/50 dark:bg-black/50 backdrop-blur',
          content: 'min-w-80'
        }}
      >
        <SheetHeader title="Custom Classnames" description="This sheet has custom class names." />
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
