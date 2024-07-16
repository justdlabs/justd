'use client'

import React from 'react'

import { Description, TextField } from '@/components/ui'

export default function TextFieldControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <TextField value={value} onChange={setValue} label='Name' className='mb-2' />
            <Description className='mt-2 block [&>strong]:text-foreground'>
                You have typed: <strong>{value ?? '-'}</strong>
            </Description>
        </>
    )
}
