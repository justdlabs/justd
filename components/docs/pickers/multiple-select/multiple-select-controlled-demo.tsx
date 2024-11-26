"use client"

import React from "react"

import { useListData } from "react-stately"
import type { SelectedKey } from "ui"
import { Description, MultipleSelect } from "ui"

const tags = [
  { id: 1, name: "Travel" },
  { id: 2, name: "Food" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Music" },
  { id: 5, name: "Photography" }
]

export default function MultipleSelectControlledDemo() {
  const selectedItems = useListData<SelectedKey>({
    initialItems: []
  })

  return (
    <>
      <MultipleSelect
        className="max-w-xs"
        onItemInserted={(key) => console.log("on item inserted", key)}
        onItemCleared={(key) => console.log("on item cleared", key)}
        label="Select tags"
        selectedItems={selectedItems}
        items={tags}
        tag={(item) => <MultipleSelect.Tag textValue={item.name}>{item.name}</MultipleSelect.Tag>}
      >
        {(item) => {
          return (
            <MultipleSelect.Option id={item.id} textValue={item.name}>
              {item.name}
            </MultipleSelect.Option>
          )
        }}
      </MultipleSelect>
      {selectedItems.items.length > 0 && (
        <Description className="mt-2 max-w-xs block [&>strong]:text-fg text-muted-fg">
          You have selected: <strong>{selectedItems.items.map((item) => item.name).join(", ")}</strong>
        </Description>
      )}
    </>
  )
}
