'use client'

import { Button, DateField, Form } from '@/components/ui'

export default function DateFieldDisabledDemo() {
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <DateField isRequired label='Event date' className='mb-2' />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
