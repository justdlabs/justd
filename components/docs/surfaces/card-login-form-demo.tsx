'use client'

import { Button, Card, Checkbox, Form, Link, TextField } from 'ui'

export default function CardLoginFormDemo() {
  return (
    <div className="py-3">
      <Card>
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>Don't loose the level, just keep on going.</Card.Description>
        </Card.Header>
        <Form onSubmit={() => {}}>
          <Card.Content className="space-y-6">
            <TextField isRequired label="Email" placeholder="Enter your email" />
            <TextField
              isRequired
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex justify-between items-center">
              <Checkbox>Remember me</Checkbox>
              <Link intent="primary" href="#">
                Forgot password?
              </Link>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button type="submit">Login</Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  )
}
