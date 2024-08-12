'use client'

import { Button, Card, Choicebox, Form, TextField } from 'ui'

export function LoginRootForm() {
  return (
    <Card>
      <Card.Header
        title="Sign in "
        description="This site uses essential cookies. See our Cookie Notice for more information."
      />
      <Form onSubmit={() => {}}>
        <Card.Content className="space-y-4">
          <Choicebox selectionMode="single" columns={1} gap={2}>
            <Choicebox.Item
              id="root"
              description="Account owner that performs tasks requiring unrestricted access. Learn more"
              title="Root"
            />
            <Choicebox.Item
              id="iam"
              description="User within an account that performs daily tasks. Learn more"
              title="IAM user"
            />
          </Choicebox>
          <TextField isRequired label="Account ID (12 digits)" />
          <Button type="submit">Next</Button>
        </Card.Content>
      </Form>
    </Card>
  )
}
