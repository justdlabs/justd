"use client"

import React from "react"

import { CardBlock } from "@/components/blocks"
import { OtherEmptyList } from "@/components/docs/collections/grid-list/grid-list-drag-between-item-demo"
import GridListDragDemo from "@/components/docs/collections/grid-list/grid-list-drag-demo"
import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"
import { GridList } from "ui"

export function GridListDragBlock() {
  const list = useListData({
    initialItems: [
      { id: 6, name: "The Byrds" },
      { id: 7, name: "The Yardbirds" }
    ]
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === "text" ? await item.getText("text/plain") : item.name
          return { id: Math.random(), name }
        })
      )

      if (e.target.dropPosition === "before") {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === "after") {
        list.insertAfter(e.target.key, ...items)
      }
    }
  })

  return (
    <CardBlock>
      <div className="grid gap-4 items-start lg:grid-cols-3 w-full">
        <GridListDragDemo />
        <GridList aria-label="Droppable list" items={list.items} dragAndDropHooks={dragAndDropHooks}>
          {(item) => <GridList.Item>{item.name}</GridList.Item>}
        </GridList>
        <OtherEmptyList />
      </div>
    </CardBlock>
  )
}
