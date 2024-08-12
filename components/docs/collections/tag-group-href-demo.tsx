'use client'

import { Tag } from 'ui'

const articles = [
  { name: 'React Tutorial', url: '#' },
  { name: 'TypeScript Handbook', url: '#' },
  { name: 'JavaScript Guide', url: '#' }
]

export default function TagGroupControlledDemo() {
  return (
    <Tag.Group>
      <Tag.List items={articles}>
        {(item) => (
          <Tag.Item id={item.name} href={item.url}>
            {item.name}
          </Tag.Item>
        )}
      </Tag.List>
    </Tag.Group>
  )
}
