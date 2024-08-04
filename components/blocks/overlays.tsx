'use client'

import { CardBlock } from '@/components/blocks'
import {
  Button,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle
} from 'ui'

export function PopoverOverlays() {
  return (
    <CardBlock>
      <Popover>
        <Button appearance="outline">Forgot Password</Button>
        <PopoverContent className="max-w-[28rem]">
          <PopoverHeader>
            <PopoverTitle>Email</PopoverTitle>
            <PopoverDescription>We'll send you an email to log in.</PopoverDescription>
          </PopoverHeader>
          <PopoverFooter>
            <Button>Send Login Link</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </CardBlock>
  )
}

export function ModalOverlays() {
  return (
    <CardBlock>
      <Modal>
        <Button>Install Update</Button>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Install Update</ModalTitle>
            <ModalDescription>An update is available for your application.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose>Later</ModalClose>
            <ModalClose appearance="solid">
              Update Now
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </CardBlock>
  )
}
