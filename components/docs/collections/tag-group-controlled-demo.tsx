import React from 'react'

import type { Selection } from 'react-aria-components'
import { Description, Tag, TagGroup } from 'ui'

const fruitList = [
    { id: '1', name: 'Apple', available: false },
    { id: '2', name: 'Banana', available: true },
    { id: '3', name: 'Cherry', available: true },
    { id: '4', name: 'Date', available: false }
]

export default function TagGroupControlledDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set([]))
    return (
        <div>
            <TagGroup
                selectionMode='multiple'
                items={fruitList}
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                {(item) => <Tag>{item.name}</Tag>}
            </TagGroup>

            <Description className='mt-2 block [&>strong]:text-foreground text-muted-foreground'>
                You have selected: <strong>{Array.from(selected).join(', ')}</strong>
            </Description>
        </div>
    )
}
