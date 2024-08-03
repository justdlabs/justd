'use client'

import { ListBox, ListBoxItem } from 'ui'

export default function ListBoxControlledDemo() {
  return (
    <>
      <ListBox items={fruits} aria-label="Fruits" selectionMode="multiple">
        {(fruit) => <ListBoxItem id={fruit.id}>{fruit.name}</ListBoxItem>}
      </ListBox>
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
