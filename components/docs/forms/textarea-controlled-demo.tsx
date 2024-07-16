'use client'

import React from 'react'

import { Textarea } from '@/components/ui'

export default function TextareaControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <Textarea
                value={value}
                onChange={setValue}
                label='Address'
                className='mb-2'
            />
            <p className='mt-2'>You have typed: {value ?? '-'}</p>
        </>
    )
}
