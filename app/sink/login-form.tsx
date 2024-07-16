'use client'

import { GithubLogo, GoogleLogo } from '@/components/logo'
import { Button, Card, Checkbox, Form, Link, Separator, TextField } from '@/components/ui'
import { toast } from 'sonner'

export default function LoginFormSink() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Register</Card.Title>
                <Card.Description>Create your account</Card.Description>
            </Card.Header>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    toast.success('Dummy Login Successfully')
                }}
            >
                <Card.Content className='grid gap-4'>
                    <div className='flex gap-4'>
                        <Button variant='outline' className='w-full'>
                            <GithubLogo className='h-4 w-4' />
                            Github
                        </Button>
                        <Button variant='outline' className='w-full'>
                            <GoogleLogo className='h-4 w-4' />
                            Google
                        </Button>
                    </div>
                    <Separator />
                    <TextField isRequired label='Name' placeholder='Enter your Name' />
                    <TextField
                        isRequired
                        label='Email'
                        type='email'
                        placeholder='Enter your email'
                    />
                    <TextField
                        isRequired
                        label='Password'
                        type='password'
                        placeholder='Enter your password'
                    />
                    <Checkbox>
                        I agree to the<Link href='#'>terms and conditions</Link>
                    </Checkbox>
                </Card.Content>
                <Card.Footer className='justify-end gap-4'>
                    <Link href='#'>Register</Link>
                    <Button type='submit'>Login</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
