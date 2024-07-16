'use client'

import React from 'react'

import { MultiSelect } from '@/components/ui'

const frameworks = [
    { value: 'next', label: 'Next' },
    { value: 'astro', label: 'Astro' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'ci', label: 'Codeigniter' }
]
export default function MultiSelectDemo() {
    const [selectedItems, setSelectedItems] = React.useState<
        { value: string; label: string }[]
    >([])
    return (
        <MultiSelect
            className='max-w-72'
            label='Tags'
            selected={selectedItems}
            setSelected={setSelectedItems}
            placeholder='Select frameworks'
            items={frameworks}
        ></MultiSelect>
    )
}
