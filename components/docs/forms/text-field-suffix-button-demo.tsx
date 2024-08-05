'use client'

import React from 'react'

import { IconPlus } from '@irsyadadl/paranoid'
import { Button, ModalBody, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, TextField } from 'ui'

export default function TextFieldSuffixButtonDemo() {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <ModalContent isOpen={open} onOpenChange={close}>
        <ModalHeader>
          <ModalTitle>New User</ModalTitle>
          <ModalDescription>Create a new user account</ModalDescription>
        </ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <TextField label="Username" placeholder="Username" />
          <TextField label="Email" placeholder="Email" type="email" />
        </ModalBody>
        <ModalFooter>
          <ModalClose appearance="outline">Cancel</ModalClose>
          <Button onPress={close}>Continue</Button>
        </ModalFooter>
      </ModalContent>
      <TextField
        label="Username"
        suffix={
          <Button aria-label="New user" onPress={() => setOpen(true)} appearance="outline">
            <IconPlus />
          </Button>
        }
      />
    </>
  )
}
