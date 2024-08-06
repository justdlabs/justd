'use client'

import { Button, Modal, ModalClose, ModalContent, ModalFooter, ModalHeader } from 'ui'

export default function ModalClassnamesDemo() {
  return (
    <Modal>
      <Button>Open</Button>
      <ModalContent
        classNames={{
          overlay: 'bg-white/50 dark:bg-black/50 backdrop-blur',
          content: 'bg-background'
        }}
      >
        <ModalHeader title="Custom Classnames" description="This modal has custom class names." />
        <ModalFooter>
          <ModalClose>Close</ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
