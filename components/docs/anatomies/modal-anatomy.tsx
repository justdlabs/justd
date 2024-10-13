import { Button, Modal } from 'ui'

export default function ModalAnatomy() {
  return (
    <Modal>
      <Button>Turn on 2FA</Button>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Let's beef up your account.</Modal.Title>
          <Modal.Description>...</Modal.Description>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
        <Modal.Footer>
          <Modal.Close>Nope</Modal.Close>
          <Button>Yep</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
