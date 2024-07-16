'use client'

import React from 'react'

import { Description, GridList } from '@/components/ui'
import type { Selection } from 'react-aria-components'

export default function GridListControlledDemo() {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]))
    return (
        <div>
            <GridList
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                items={items}
                aria-label='Select items'
                selectionMode='multiple'
                className='min-w-64'
            >
                {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
            </GridList>
            <Description className='mt-2 block [&>strong]:text-foreground text-muted-foreground'>
                You have selected: <strong>{Array.from(selectedKeys).join(', ')}</strong>
            </Description>
        </div>
    )
}

const items = [
    { id: '1', name: 'The Beatles' },
    { id: '2', name: 'Led Zeppelin' },
    { id: '3', name: 'Pink Floyd' },
    { id: '4', name: 'Queen' },
    { id: '5', name: 'The Rolling Stones' }
]
