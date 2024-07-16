'use client'

import React from 'react'

import { Description, FileTrigger } from '@/components/ui'

export default function FileTriggerDemo() {
    const [file, setFile] = React.useState<string[] | null>(null)
    return (
        <>
            <FileTrigger
                isDisabled
                onSelect={(e) => {
                    const files = Array.from(e ?? [])
                    const filenames = files.map((file) => file.name)
                    setFile(filenames)
                }}
            />
            {file && <Description>{file}</Description>}
        </>
    )
}
