'use client'

import { ListBox, ListBoxItem } from 'ui'

export default function ListBoxDemo() {
  return (
    <ListBox items={rockPopBands} aria-label="Bands" selectionMode="multiple">
      {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
    </ListBox>
  )
}

const rockPopBands = [
  { id: '1', name: 'Nirvana' },
  { id: '2', name: 'Radiohead' },
  { id: '3', name: 'Foo Fighters' },
  { id: '4', name: 'Arctic Monkeys' },
  { id: '5', name: 'The Strokes' }
]
