'use client'

import { Button, Card, Checkbox, Form, Link, TextField } from '@/components/ui'

export default function CardLoginFormDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Use your email and password to login</Card.Description>
            </Card.Header>
            <Form action={() => {}}>
                <Card.Content className='space-y-6'>
                    <TextField isRequired label='Email' placeholder='Enter your email' />
                    <TextField
                        isRequired
                        label='Password'
                        type='password'
                        placeholder='Enter your password'
                    />
                    <div className='flex items-center justify-between'>
                        <Checkbox>Remember me</Checkbox>
                        <Link href='#' className='text-sm text-muted-foreground'>
                            Forgot password?
                        </Link>
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button type='submit'>Login</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
