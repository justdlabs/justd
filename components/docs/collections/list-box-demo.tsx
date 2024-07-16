'use client'

import { ListBox } from '@/components/ui'

const libraries = [
    { id: 'tw', name: 'Tailwind CSS' },
    { id: 'bs', name: 'Bootstrap' },
    { id: 'react', name: 'React.Js' },
    { id: 'jq', name: 'JQuery' },
    { id: 'alpine', name: 'Alpine.Js' }
]

export default function ListBoxDemo() {
    return (
        <ListBox items={libraries} aria-label='Libraries' selectionMode='multiple'>
            {(item) => (
                <ListBox.Item id={item.id} key={item.id}>
                    {item.name}
                </ListBox.Item>
            )}
        </ListBox>
    )
}
