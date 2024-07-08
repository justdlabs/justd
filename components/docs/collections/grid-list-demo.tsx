'use client'

import { GridList, GridListItem } from 'ui'

const items = [
  { id: '1', name: 'The Beatles' },
  { id: '2', name: 'Led Zeppelin' },
  { id: '3', name: 'Pink Floyd' },
  { id: '4', name: 'Queen' },
  { id: '5', name: 'The Rolling Stones' }
]
export default function GridListDemo() {
  return (
    <GridList items={items} aria-label="you make it" selectionMode="multiple" className="min-w-64">
      {(item) => <GridListItem id={item.id}>{item.name}</GridListItem>}
    </GridList>
  )
}
