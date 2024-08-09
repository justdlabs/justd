'use client'

import { useListData } from 'react-stately'
import type { SelectedKey } from 'ui'
import { MultipleSelect, MultipleSelectItem, Tag } from 'ui'

export default function MultipleSelectDisabledDemo() {
  const selectedItems = useListData<SelectedKey>({
    initialItems: []
  })
  return (
    <MultipleSelect
      isDisabled
      className="max-w-xs"
      label="Fruits"
      selectedItems={selectedItems}
      items={fruits}
      tag={(item) => <Tag textValue={item.name}>{item.name}</Tag>}
    >
      {(item) => {
        return <MultipleSelectItem textValue={item.name}>{item.name}</MultipleSelectItem>
      }}
    </MultipleSelect>
  )
}

const fruits: SelectedKey[] = [{ id: 1, name: 'Apple' }]
