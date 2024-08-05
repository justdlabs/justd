'use client'

import { Tag, TagGroup, TagList } from 'ui'

const shoes = [
  { id: '1', name: 'Nike', available: true },
  { id: '2', name: 'Adidas', available: false },
  { id: '3', name: 'Puma', available: true },
  { id: '4', name: 'Reebok', available: true },
  { id: '5', name: 'Under Armour', available: false }
]

export default function TagGroupIntentDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <TagGroup intent="danger" label="Shoes" selectionMode="multiple">
        <TagList items={shoes}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup intent="secondary" label="Shoes" selectionMode="multiple">
        <TagList items={shoes}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup intent="info" label="Shoes" selectionMode="multiple">
        <TagList items={shoes}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
    </div>
  )
}
