'use client'

import { Tag } from 'ui'

export const androidBrands = [
  { id: '1', name: 'Samsung', available: false },
  { id: '2', name: 'OnePlus', available: true },
  { id: '3', name: 'Google', available: true },
  { id: '4', name: 'Xiaomi', available: false }
]

export default function TagGroupDemo() {
  return (
    <Tag.Group label="Android Brands" selectionMode="multiple">
      <Tag.List items={androidBrands}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
    </Tag.Group>
  )
}
