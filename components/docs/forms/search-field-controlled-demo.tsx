'use client'

import React from 'react'

import { Description, SearchField } from '@/components/ui'

export default function SearchFieldControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <SearchField value={value} onChange={setValue} className='mb-2' />
            <Description className='mt-2 block [&>strong]:text-foreground'>
                You have typed: <strong>{value ?? '-'}</strong>
            </Description>
        </>
    )
}
