import React from 'react'

import type { Selection } from 'react-aria-components'
import { Description, Tag } from 'ui'

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
      <Tag.Group selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        <Tag.List items={fruitList}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>

      <Description className="mt-2 block [&>strong]:text-fg text-muted-fg">
        You have selected: <strong>{Array.from(selected).join(', ')}</strong>
      </Description>
    </div>
  )
}
