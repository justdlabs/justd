'use client'

import { Select } from '@/components/ui'

export const distros = [
    { id: 1, name: 'Debian' },
    { id: 2, name: 'Ubuntu' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'OpenSUSE' },
    { id: 6, name: 'Red Hat' }
]
export default function SelectDemo() {
    return (
        <Select label='Linux Distros' placeholder='Select a linux distro' items={distros}>
            {(item) => (
                <Select.Item key={item.id} id={item.id} textValue={item.name}>
                    {item.name}
                </Select.Item>
            )}
        </Select>
    )
}
