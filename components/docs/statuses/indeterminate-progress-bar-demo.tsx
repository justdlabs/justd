'use client'

import React from 'react'

import { Progress } from '@/components/ui'

export default function ProgressDemo() {
    const [value, setValue] = React.useState(1)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return <Progress label='Loading…' isIndeterminate value={60} />
}
