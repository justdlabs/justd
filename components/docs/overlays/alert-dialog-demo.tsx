'use client'

import { buttonStyles, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, ModalTrigger } from 'ui'

export default function AlertDialogDemo() {
  return (
    <Modal>
      <ModalTrigger className={buttonStyles({ intent: 'danger' })}>Delete</ModalTrigger>
      <ModalContent role="alertdialog">
        <ModalHeader>
          <ModalTitle>Delete file</ModalTitle>
          <ModalDescription>This will permanently delete the selected file. Continue?</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose appearance="outline">Cancel</ModalClose>
          <ModalClose appearance="solid" intent="danger">
            Continue
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
