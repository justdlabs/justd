'use client'

import { useListData } from 'react-stately'
import type { SelectedKey } from 'ui'
import { MultipleSelect, MultipleSelectItem, Tag } from 'ui'

const tags = [
  { id: 1, textValue: 'Cooking' },
  { id: 2, textValue: 'Gardening' },
  { id: 3, textValue: 'Meditation' },
  { id: 4, textValue: 'Parenting' },
  { id: 5, textValue: 'DIY Projects' },
  { id: 6, textValue: 'Mindfulness' },
  { id: 7, textValue: 'Travel Tips' },
  { id: 8, textValue: 'Pet Care' },
  { id: 9, textValue: 'Home Decor' },
  { id: 10, textValue: 'Sustainable Living' }
]

export default function MultipleSelectMinMaxDemo() {
  const selectedList = useListData<SelectedKey>({
    initialItems: [tags[0]]
  })
  return (
    <MultipleSelect
      className="max-w-xs"
      label="Select tags"
      description="You can select up to 4 tags"
      max={4}
      selectedList={selectedList}
      items={tags}
      tag={(item) => <Tag textValue={item.textValue}>{item.textValue}</Tag>}
    >
      {(item) => {
        return <MultipleSelectItem textValue={item.textValue}>{item.textValue}</MultipleSelectItem>
      }}
    </MultipleSelect>
  )
}
