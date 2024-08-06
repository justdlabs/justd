'use client'

import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Note,
  TextField
} from 'ui'

export default function ModalCustomStyleDemo() {
  return (
    <Modal>
      <Button intent="danger">Delete Project</Button>
      <ModalContent role="alertdialog">
        <ModalHeader
          className="bg-background border-b mb-4"
          title="Delete Project"
          description="This project’s gonna get wiped, including all its Deployments, Domains, Env Variables, Serverless Functions, and Settings."
        >
          <Note intent="danger">No undo button here, so be sure!</Note>
        </ModalHeader>
        <Form onSubmit={() => {}}>
          <ModalBody className="space-y-4">
            <TextField
              isRequired
              autoFocus
              label="Enter the project name"
              type="text"
              placeholder="team/project-name"
            />
            <TextField isRequired label='To verify, type "delete my project" below' type="text" />
          </ModalBody>
          <ModalFooter>
            <ModalClose>Cancel</ModalClose>
            <Button intent="danger" type="submit">
              Delete Project
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  )
}
