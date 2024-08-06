'use client'

import {
  Button,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Switch,
  TextField
} from 'ui'

export default function SheetDemo() {
  return (
    <Sheet>
      <Button appearance="outline">Edit Settings</Button>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update User Settings</SheetTitle>
          <SheetDescription>Adjust your preferences and configurations here.</SheetDescription>
        </SheetHeader>
        <SheetBody className="space-y-4">
          <TextField label="Username" type="text" placeholder="Enter your username" />
          <TextField label="Email" type="email" placeholder="Enter your email address" />
          <Switch>Enable Notifications</Switch>
        </SheetBody>
        <SheetFooter>
          <SheetClose>Cancel</SheetClose>
          <Button intent="primary" type="submit">
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
