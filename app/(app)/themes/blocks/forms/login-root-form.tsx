'use client'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Choicebox,
  ChoiceboxItem,
  Form,
  TextField
} from 'ui'

export function LoginRootForm() {
  return (
    <Card>
      <CardHeader
        title="Sign in "
        description="This site uses essential cookies. See our Cookie Notice for more information."
      />
      <Form onSubmit={() => {}}>
        <CardContent className="space-y-4">
          <Choicebox selectionMode="single" columns={1} gap={2}>
            <ChoiceboxItem
              id="root"
              description="Account owner that performs tasks requiring unrestricted access. Learn more"
              title="Root"
            />
            <ChoiceboxItem
              id="iam"
              description="User within an account that performs daily tasks. Learn more"
              title="IAM user"
            />
          </Choicebox>
          <TextField isRequired label="Account ID (12 digits)" />
          <Button type="submit">Next</Button>
        </CardContent>
      </Form>
    </Card>
  )
}
