'use client'

import React from 'react'

import { TimeField } from '@/components/ui'
import { Time } from '@internationalized/date'

export default function TimeFieldValidationDemo() {
    const [value, setValue] = React.useState(new Time(11, 45))
    return (
        <div className='space-y-3'>
            <div className='divide-y [&_p]:py-2'>
                <p>{value ? value.toString() : '--'}</p>
            </div>
            <TimeField label='Event time' value={value} onChange={setValue} />
        </div>
    )
}
