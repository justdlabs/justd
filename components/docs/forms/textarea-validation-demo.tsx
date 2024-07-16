'use client'

import React from 'react'

import { Button, Form, Textarea } from '@/components/ui'

export default function TextareaControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Textarea
                value={value}
                onChange={setValue}
                label='Address'
                isRequired
                className='mb-2'
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
