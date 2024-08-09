'use client'

import React from 'react'

import { useListData } from 'react-stately'
import type { SelectedKey } from 'ui'
import { Description, MultipleSelect, MultipleSelectItem, Tag } from 'ui'

const tags = [
  { id: 1, textValue: 'Travel' },
  { id: 2, textValue: 'Food' },
  { id: 3, textValue: 'Fashion' },
  { id: 4, textValue: 'Music' },
  { id: 5, textValue: 'Photography' }
]

export default function MultipleSelectControlledDemo() {
  const selectedList = useListData<SelectedKey>({
    initialItems: []
  })

  return (
    <>
      <MultipleSelect
        className="max-w-xs"
        onItemAdd={(key) => console.log('onItemAdd', key)}
        onItemRemove={(key) => console.log('onItemRemove', key)}
        label="Select tags"
        selectedList={selectedList}
        items={tags}
        tag={(item) => <Tag textValue={item.textValue}>{item.textValue}</Tag>}
      >
        {(item) => {
          return (
            <MultipleSelectItem id={item.id} textValue={item.textValue}>
              {item.textValue}
            </MultipleSelectItem>
          )
        }}
      </MultipleSelect>
      {selectedList.items.length > 0 && (
        <Description className="mt-2 max-w-xs block [&>strong]:text-fg text-muted-fg">
          You have selected:{' '}
          <strong>{selectedList.items.map((item) => item.textValue).join(', ')}</strong>
        </Description>
      )}
    </>
  )
}
