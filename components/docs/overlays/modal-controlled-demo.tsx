'use client'

import { useState } from 'react'

import { Button, Modal } from '@/components/ui'

export default function ModalControlledDemo() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onPress={() => setOpen(true)} variant='danger'>
                Delete Again!
            </Button>
            <Modal.Overlay isOpen={open} onOpenChange={setOpen}>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Delete file</Modal.Title>
                        <Modal.Description>
                            This will permanently delete the selected file. Are you
                            absolutely sure?
                        </Modal.Description>
                    </Modal.Header>
                    <Modal.Footer>
                        <Modal.Close>Cancel</Modal.Close>
                        <Button onPress={() => setOpen(false)} variant='danger'>
                            Yes, Delete it!
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal.Overlay>
        </>
    )
}
