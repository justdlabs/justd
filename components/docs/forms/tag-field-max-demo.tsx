'use client'

import React from 'react'

import { useListData } from 'react-stately'
import { Button, Form, TagField } from 'ui'

export default function TagFieldMaxDemo() {
  const selectedItems = useListData({
    initialItems: []
  })

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="max-w-xs"
    >
      <TagField max={3} label="Add tag" list={selectedItems} />

      <Button type="submit" className="mt-4">
        Post
      </Button>
    </Form>
  )
}
