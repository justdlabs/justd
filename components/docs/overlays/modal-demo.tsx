'use client'

import { Button, Form, Modal, TextField } from '@/components/ui'

export default function ModalDemo() {
    return (
        <Modal>
            <Button>Turn on 2FA</Button>
            <Modal.Overlay>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Nice! Let's beef up your account.</Modal.Title>
                        <Modal.Description>
                            2FA beefs up your account's defense. Pop in your password to
                            keep going.
                        </Modal.Description>
                    </Modal.Header>
                    <Form onSubmit={() => {}}>
                        <TextField
                            isRequired
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                        />
                        <Modal.Footer className='pt-4'>
                            <Modal.Close>Cancel</Modal.Close>
                            <Button type='submit'>Turn on 2FA</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Content>
            </Modal.Overlay>
        </Modal>
    )
}
