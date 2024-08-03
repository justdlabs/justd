'use client'

import React from 'react'

import { Button, Menu, MenuContent, MenuItem } from 'ui'

export default function MenuCollectionDemo() {
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <MenuContent className="min-w-64" placement="bottom" items={categories}>
        {(item) => <MenuItem id={item.slug}>{item.name}</MenuItem>}
      </MenuContent>
    </Menu>
  )
}

const categories = [
  {
    name: 'Technology',
    slug: 'technology'
  },
  {
    name: 'Health',
    slug: 'health'
  },
  {
    name: 'Business',
    slug: 'business'
  },
  {
    name: 'Travel',
    slug: 'travel'
  },
  {
    name: 'Education',
    slug: 'education'
  },
  {
    name: 'Entertainment',
    slug: 'entertainment'
  },
  {
    name: 'Sports',
    slug: 'sports'
  },
  {
    name: 'Fashion',
    slug: 'fashion'
  },
  {
    name: 'Food',
    slug: 'food'
  },
  {
    name: 'Science',
    slug: 'science'
  }
]
