'use client'

import { Button, buttonVariants, Modal } from '@/components/ui'

export default function AlertDialogDemo() {
    return (
        <Modal>
            <Modal.Trigger className={buttonVariants({ variant: 'danger' })}>
                Delete
            </Modal.Trigger>
            <Modal.Overlay isDismissable={false}>
                <Modal.Content>
                    {({ close }) => (
                        <>
                            <Modal.Header>
                                <Modal.Title>Delete file</Modal.Title>
                                <Modal.Description>
                                    This will permanently delete the selected file. Are
                                    you absolutely sure?
                                </Modal.Description>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant='outline' onPress={close}>
                                    Cancel
                                </Button>
                                <Button variant='danger' onPress={close}>
                                    Yes, Delete it!
                                </Button>
                            </Modal.Footer>
                        </>
                    )}
                </Modal.Content>
            </Modal.Overlay>
        </Modal>
    )
}
