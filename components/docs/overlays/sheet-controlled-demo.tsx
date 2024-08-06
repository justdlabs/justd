'use client'

import React from 'react'

import {
  Button,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Textarea
} from 'ui'

export default function SheetControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Feedback</Button>
      <SheetContent isOpen={isOpen} onOpenChange={setIsOpen}>
        <SheetHeader>
          <SheetTitle>Submit Feedback</SheetTitle>
          <SheetDescription>
            Please let us know your thoughts and how we can improve our service.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <Textarea label="Your Feedback" placeholder="Type your feedback here..." />
        </SheetBody>
        <SheetFooter>
          <Button appearance="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button intent="primary" onPress={() => setIsOpen(false)}>
            Submit Feedback
          </Button>
        </SheetFooter>
      </SheetContent>
    </>
  )
}
