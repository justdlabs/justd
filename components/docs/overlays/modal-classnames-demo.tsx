'use client'

import { Button, Modal } from 'ui'

export default function ModalClassnamesDemo() {
  return (
    <Modal>
      <Button>Open</Button>
      <Modal.Content
        classNames={{
          overlay: 'bg-white/50 dark:bg-black/50 backdrop-blur',
          content: 'bg-background'
        }}
      >
        <Modal.Header title="Custom Classnames" description="This modal has custom class names." />
        <Modal.Footer>
          <Modal.Close>Close</Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
