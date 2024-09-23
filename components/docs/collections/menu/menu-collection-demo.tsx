"use client"

import React from "react"

import { Button, Menu } from "ui"

export default function MenuCollectionDemo() {
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <Menu.Content className="min-w-64" placement="bottom" items={categories}>
        {(item) => <Menu.Item id={item.slug}>{item.name}</Menu.Item>}
      </Menu.Content>
    </Menu>
  )
}

const categories = [
  {
    name: "Technology",
    slug: "technology"
  },
  {
    name: "Health",
    slug: "health"
  },
  {
    name: "Business",
    slug: "business"
  },
  {
    name: "Travel",
    slug: "travel"
  },
  {
    name: "Education",
    slug: "education"
  },
  {
    name: "Entertainment",
    slug: "entertainment"
  },
  {
    name: "Sports",
    slug: "sports"
  },
  {
    name: "Fashion",
    slug: "fashion"
  },
  {
    name: "Food",
    slug: "food"
  },
  {
    name: "Science",
    slug: "science"
  }
]
