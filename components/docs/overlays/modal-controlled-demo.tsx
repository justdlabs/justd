'use client'

import { useState } from 'react'
import {
  Button,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle
} from 'ui'

export default function ModalControlledDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setOpen(true)} intent="secondary">
        Controlled
      </Button>
      <ModalOverlay isOpen={open} onOpenChange={setOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Delete file</ModalTitle>
            <ModalDescription>This will permanently delete the selected file. Continue?</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose>Cancel</ModalClose>
            <Button onPress={() => setOpen(false)}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
