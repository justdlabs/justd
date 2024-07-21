'use client'

import {
  Button,
  buttonStyles,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalTrigger
} from 'ui'

export default function AlertDialogDemo() {
  return (
    <Modal isDismissable={false}>
      <ModalTrigger className={buttonStyles({ intent: 'danger' })}>Delete</ModalTrigger>
      <ModalOverlay>
        <ModalContent>
          <>
            <ModalHeader>
              <ModalTitle>Delete file</ModalTitle>
              <ModalDescription>This will permanently delete the selected file. Continue?</ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <Button appearance="outline" onPress={close}>
                Cancel
              </Button>
              <Button intent="danger" onPress={close}>
                Continue
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
