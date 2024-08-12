'use client'

import { Button, Card, Checkbox, Form, Link, TextField } from 'ui'

export function LoginForm() {
  return (
    <Card>
      <Card.Header title="Login" description="Don't loose the level, just keep on going." />
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
  )
}
