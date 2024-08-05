'use client'

import React from 'react'

import { type Selection } from '@react-types/shared'
import { Button, Description, Menu, MenuCheckboxItem, MenuContent, MenuSection } from 'ui'

export default function MultipleMenuDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['autoPlay']))
  return (
    <>
      <Menu>
        <Button appearance="outline">Open</Button>
        <MenuContent placement="bottom" selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
          <MenuSection items={menuItems} title="Content Preferences">
            {(item) => (
              <MenuCheckboxItem id={item.slug} textValue={item.name}>
                {item.name}
              </MenuCheckboxItem>
            )}
          </MenuSection>
        </MenuContent>
      </Menu>

      {[...selected].length > 0 && <Description className="mt-4 block">Selected: {selected === 'all' ? 'All selected' : [...selected].join(', ')}</Description>}
    </>
  )
}

const menuItems = [
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
