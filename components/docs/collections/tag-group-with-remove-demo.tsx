'use client'

import { Tag, TagGroup } from '@/components/ui'
import { useListData } from 'react-stately'

export default function TagGroupWithRemoveDemo() {
    const list = useListData({
        initialItems: [
            { id: '1', name: 'Samsung', available: false },
            { id: '2', name: 'OnePlus', available: true },
            { id: '3', name: 'Google', available: true },
            { id: '4', name: 'Xiaomi', available: false }
        ]
    })

    return (
        <TagGroup
            label='Android Brands'
            selectionMode='multiple'
            items={list.items}
            onRemove={(keys: any) => list.remove(...keys)}
        >
            {(item) => <Tag>{item.name}</Tag>}
        </TagGroup>
    )
}
