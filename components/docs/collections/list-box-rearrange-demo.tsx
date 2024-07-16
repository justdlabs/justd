'use client'

import { ListBox } from '@/components/ui'
import { useDragAndDrop } from 'react-aria-components'
import { useListData } from 'react-stately'

export default function ListBoxRearrangeDemo() {
    const list = useListData({
        initialItems: [
            { id: '1', name: 'HTML' },
            { id: '2', name: 'CSS' },
            { id: '3', name: 'Javascript' },
            { id: '4', name: 'Typescript' },
            { id: '5', name: 'PHP' }
        ]
    })
    const { dragAndDropHooks } = useDragAndDrop({
        getItems: (keys: any) =>
            [...keys].map((key) => ({ 'text/plain': list.getItem(key).name })),
        onReorder(e: any) {
            if (e.target.dropPosition === 'before') {
                list.moveBefore(e.target.key, e.keys)
            } else if (e.target.dropPosition === 'after') {
                list.moveAfter(e.target.key, e.keys)
            }
        }
    })
    return (
        <ListBox
            items={list.items}
            aria-label='Langueges'
            selectionMode='multiple'
            dragAndDropHooks={dragAndDropHooks}
        >
            {(item) => (
                <ListBox.Item id={item.id} key={item.id}>
                    {item.name}
                </ListBox.Item>
            )}
        </ListBox>
    )
}
