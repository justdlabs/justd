'use client'

import { Tag, TagGroup } from '@/components/ui'

export const androidBrands = [
    { id: '1', name: 'Samsung', available: false },
    { id: '2', name: 'OnePlus', available: true },
    { id: '3', name: 'Google', available: true },
    { id: '4', name: 'Xiaomi', available: false }
]

export default function TagGroupDemo() {
    return (
        <TagGroup label='Android Brands' selectionMode='multiple' items={androidBrands}>
            {(item) => <Tag isDisabled={!item.available}>{item.name}</Tag>}
        </TagGroup>
    )
}
