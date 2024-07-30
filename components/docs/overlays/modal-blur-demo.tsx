'use client'

import {
  Button,
  Form,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  TextField
} from 'ui'

export default function ModalBlurDemo() {
  return (
    <Modal>
      <Button>Turn on 2FA</Button>
      <ModalOverlay isBlurred>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Nice! Let's beef up your account.</ModalTitle>
            <ModalDescription>
              2FA beefs up your account's defense. Pop in your password to keep going.
            </ModalDescription>
          </ModalHeader>
          <Form onSubmit={() => {}}>
            <TextField
              isRequired
              autoFocus
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <ModalFooter className="pt-4">
              <ModalClose>Cancel</ModalClose>
              <Button type="submit">Turn on 2FA</Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
