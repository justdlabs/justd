'use client'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  Link,
  TextField
} from 'ui'

export default function CardLoginFormDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Don't loose the level, just keep on going.</CardDescription>
      </CardHeader>
      <Form action={() => {}}>
        <CardContent className="space-y-6">
          <TextField isRequired label="Email" placeholder="Enter your email" />
          <TextField isRequired label="Password" type="password" placeholder="Enter your password" />
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
      </Form>
    </Card>
  )
}
