'use client'

import React from 'react'

import { useListData } from 'react-stately'
import { Tag } from 'ui'

const shoes = [
  { id: '1', name: 'Nike', available: true },
  { id: '2', name: 'Adidas', available: false },
  { id: '3', name: 'Puma', available: true },
  { id: '4', name: 'Reebok', available: true }
]

export default function TagGroupIntentDemo() {
  const shoesList = useListData({
    initialItems: shoes
  })
  return (
    <div className="space-y-2 max-w-sm">
      <Tag.Group
        intent="primary"
        aria-label="Primary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <Tag.List items={shoesList.items}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>
      <Tag.Group
        intent="secondary"
        aria-label="Secondary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <Tag.List items={shoesList.items}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>
      <Tag.Group
        intent="success"
        aria-label="Success Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <Tag.List items={shoesList.items}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>
      <Tag.Group
        intent="warning"
        aria-label="Warning Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <Tag.List items={shoesList.items}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>
      <Tag.Group
        intent="danger"
        aria-label="Danger Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <Tag.List items={shoesList.items}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>
    </div>
  )
}
