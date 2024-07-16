import React from 'react'

import { Tag, TagGroup } from '@/components/ui'

const articles = [
    { name: 'React Tutorial', url: '#' },
    { name: 'TypeScript Handbook', url: '#' },
    { name: 'JavaScript Guide', url: '#' }
]

export default function TagGroupControlledDemo() {
    return (
        <TagGroup items={articles}>
            {(item) => (
                <Tag id={item.name} href={item.url}>
                    {item.name}
                </Tag>
            )}
        </TagGroup>
    )
}
