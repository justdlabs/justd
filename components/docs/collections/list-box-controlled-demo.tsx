'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'
import { Description, ListBox, ListBoxItem } from 'ui'

export default function ListBoxControlledDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['2']))
  return (
    <>
      <ListBox selectedKeys={selected} onSelectionChange={setSelected} items={fruits} selectionMode="single" aria-label="Fruits">
        {(fruit) => (
          <ListBoxItem id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </ListBoxItem>
        )}
      </ListBox>

      {selected && <Description className="mt-4 block">Selected: {selected}</Description>}
    </>
  )
}

const fruits = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Banana'
  },
  {
    id: 3,
    name: 'Orange'
  },
  {
    id: 4,
    name: 'Strawberry'
  },
  {
    id: 5,
    name: 'Grapes'
  },
  {
    id: 6,
    name: 'Mango'
  },
  {
    id: 7,
    name: 'Pineapple'
  }
]
