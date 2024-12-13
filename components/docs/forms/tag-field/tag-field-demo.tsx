"use client"

import { useListData } from "react-stately"
import { TagField } from "ui"

export default function TagFieldDemo() {
  const selectedItems = useListData({
    initialItems: [
      {
        id: 1,
        name: "Laravel",
      },
    ],
  })

  return <TagField className="max-w-xs" label="Add tag" list={selectedItems} />
}
