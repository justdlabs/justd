"use client"

import { useListData } from "react-stately"
import type { SelectedKey } from "ui"
import { MultipleSelect, Tag } from "ui"

const tags = [
  { id: 1, name: "Cooking" },
  { id: 2, name: "Gardening" },
  { id: 3, name: "Meditation" },
  { id: 4, name: "Parenting" },
  { id: 5, name: "DIY Projects" },
  { id: 6, name: "Mindfulness" },
  { id: 7, name: "Travel Tips" },
  { id: 8, name: "Pet Care" },
  { id: 9, name: "Home Decor" },
  { id: 10, name: "Sustainable Living" }
]

export default function MultipleSelectMinMaxDemo() {
  const selectedItems = useListData<SelectedKey>({
    initialItems: [tags[0]]
  })
  return (
    <MultipleSelect
      className="max-w-xs"
      label="Select tags"
      description="You can select up to 4 tags"
      max={4}
      selectedItems={selectedItems}
      items={tags}
      tag={(item) => <MultipleSelect.Tag textValue={item.name}>{item.name}</MultipleSelect.Tag>}
    >
      {(item) => {
        return <MultipleSelect.Option textValue={item.name}>{item.name}</MultipleSelect.Option>
      }}
    </MultipleSelect>
  )
}
