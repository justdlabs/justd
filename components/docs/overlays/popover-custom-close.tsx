'use client'

import React from 'react'

import {
  Button,
  Checkbox,
  Form,
  Link,
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  TextField
} from 'ui'

export default function PopoverCustomClose() {
  return (
    <Popover>
      <Button>Login</Button>
      <PopoverContent className="sm:min-w-96">
        <PopoverHeader className="mb-4">
          <PopoverTitle>Login</PopoverTitle>
          <PopoverDescription>Enter your credentials to sign in.</PopoverDescription>
        </PopoverHeader>
        <Form onSubmit={() => {}}>
          <PopoverBody className="pb-4">
            <div className="space-y-4">
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
          </PopoverBody>
          <PopoverFooter>
            <PopoverClose>Cancel</PopoverClose>
            <Button type="submit">Login</Button>
          </PopoverFooter>
        </Form>
      </PopoverContent>
    </Popover>
  )
}
