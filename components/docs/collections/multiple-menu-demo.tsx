'use client'

import React from 'react'

import { type Selection } from '@react-types/shared'
import { Button, Menu } from 'ui'

export default function MultipleMenuDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['autoPlay']))
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <Menu.Content
        placement="bottom"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Menu.Section items={items} title="Content Preferences">
          {(item) => (
            <Menu.Checkbox id={item.slug} textValue={item.name}>
              {item.name}
            </Menu.Checkbox>
          )}
        </Menu.Section>
      </Menu.Content>
    </Menu>
  )
}

const items = [
  {
    name: 'Auto-Play Videos',
    slug: 'autoPlay'
  },
  {
    name: 'High-Quality Streaming',
    slug: 'highQuality'
  },
  {
    name: 'Exclusive Releases',
    slug: 'exclusiveContent'
  },
  {
    name: 'Default Subtitles',
    slug: 'subtitles'
  },
  {
    name: 'Personalized Recommendations',
    slug: 'recommendations'
  },
  {
    name: 'Background Play',
    slug: 'backgroundPlay'
  },
  {
    name: 'Allow Downloads',
    slug: 'download'
  }
]
