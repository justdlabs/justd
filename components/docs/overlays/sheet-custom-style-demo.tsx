'use client'

import {
  Button,
  Form,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  Note,
  TextField
} from 'ui'

export default function SheetCustomStyleDemo() {
  return (
    <Sheet>
      <Button intent="warning">Archive Project</Button>
      <SheetContent role="dialog">
        <SheetHeader
          className="bg-background border-b mb-4"
          title="Archive Project"
          description="Archiving this project will disable access and hide it from active projects."
        >
          <Note intent="warning">You can restore the project anytime from the archive!</Note>
        </SheetHeader>
        <Form className="overflow-y-auto flex-1" onSubmit={() => {}}>
          <SheetBody className="space-y-4">
            <TextField
              isRequired
              autoFocus
              label="Confirm by typing the project name"
              type="text"
              placeholder="team/project-name"
            />
            <TextField isRequired label='To verify, type "archive my project" below' type="text" />
          </SheetBody>
          <SheetFooter>
            <SheetClose>Cancel</SheetClose>
            <Button intent="warning" type="submit">
              Archive Project
            </Button>
          </SheetFooter>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
