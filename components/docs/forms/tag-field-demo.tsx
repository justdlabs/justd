'use client'

import React from 'react'

import { useListData } from 'react-stately'
import { TagField } from 'ui'

export default function TagFieldDemo() {
  const selectedItems = useListData({
    initialItems: []
  })

  return <TagField label="Add tag" list={selectedItems} />
}
