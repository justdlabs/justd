'use client'

import React from 'react'

import { Checkbox, Description } from '@/components/ui'

export default function CheckboxControlledDemo() {
    const [selected, setSelection] = React.useState(false)
    return (
        <>
            <Checkbox isSelected={selected} onChange={setSelection} value='updates'>
                Receive Updates
            </Checkbox>
            <Description className='mt-2 block [&>strong]:text-foreground'>
                You have <strong>{selected ? 'enabled' : 'disabled'}</strong> the option.
            </Description>
        </>
    )
}
