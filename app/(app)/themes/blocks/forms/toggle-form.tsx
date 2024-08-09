'use client'

import { Button, Card, CardContent, CardFooter, CardHeader, Checkbox, Link, TextField } from 'ui'

export function ToggleForm() {
  return (
    <Card>
      <CardHeader
        title="Team members"
        description="Share this link with your team to give them access to your organization."
      />
      <CardContent className="space-y-6">
        <div className="flex gap-2 w-full">
          <TextField isRequired placeholder="Enter your email" />
          <Button type="submit">Send link</Button>
        </div>
        <div className="flex justify-between items-center">
          <Checkbox>Remember me</Checkbox>
          <Link intent="primary" href="#">
            Forgot password?
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit">Login</Button>
      </CardFooter>
    </Card>
  )
}
