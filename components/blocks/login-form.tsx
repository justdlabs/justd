'use client'

import React from 'react'

import { Button, CardDescription, CardTitle, Checkbox, Form, Link, TextField } from 'ui'

export function LoginForm() {
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-y-1.5">
        <CardTitle>Login</CardTitle>
        <CardDescription>Don't loose the level, just keep on going.</CardDescription>
      </div>
      <Form onSubmit={() => {}} className="space-y-6">
        <div className="space-y-6">
          <TextField isRequired type="email" label="Email" placeholder="Enter your email" />
          <TextField
            isRequired
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-between items-center">
            <Checkbox name="remember-me">Remember me</Checkbox>
            <Link intent="primary" href="#">
              Forgot password?
            </Link>
          </div>
        </div>
        <div>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </div>
  )
}
