'use client'

import {
  Button,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle
} from 'ui'

import { CardSink } from './card-sink'

export function PopoverOverlays() {
  return (
    <CardSink>
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
    </CardSink>
  )
}

export function ModalOverlays() {
  return (
    <CardSink>
      <Modal>
        <Button>Install Update</Button>
        <ModalOverlay>
          <ModalContent>
            {({ close }) => (
              <>
                <ModalHeader>
                  <ModalTitle>Install Update</ModalTitle>
                  <ModalDescription>
                    An update is available for your application.
                  </ModalDescription>
                </ModalHeader>
                <ModalFooter>
                  <ModalClose>Later</ModalClose>
                  <Button onPress={close}>Update Now</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </CardSink>
  )
}
