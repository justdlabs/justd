'use client'

import React from 'react'

import GridListDragDemo from '@/components/docs/collections/grid-list-drag-demo'
import { useDragAndDrop } from 'react-aria-components'
import { useListData } from 'react-stately'
import { Grid, GridEmptyState, GridItem, GridList, GridListItem } from 'ui'

export default function GridListDragBetweenItemDemo() {
  const list = useListData({
    initialItems: [
      { id: 6, name: 'The Byrds' },
      { id: 7, name: 'The Yardbirds' }
    ]
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === 'text' ? await item.getText('text/plain') : item.name
          return { id: Math.random(), name }
        })
      )

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items)
      }
    }
  })

  return (
    <Grid gap={4} columns={3}>
      <GridItem>
        <GridListDragDemo />
      </GridItem>
      <GridItem>
        <GridList
          aria-label="Droppable list"
          items={list.items}
          dragAndDropHooks={dragAndDropHooks}
        >
          {(item) => <GridListItem>{item.name}</GridListItem>}
        </GridList>
      </GridItem>
      <GridItem>
        <OtherEmptyList />
      </GridItem>
    </Grid>
  )
}

function OtherEmptyList() {
  const list = useListData({
    initialItems: [{ id: 7, name: 'The Who' }]
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === 'text' ? await item.getText('text/plain') : item.name
          return { id: Math.random(), name }
        })
      )

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items)
      }
    }
  })

  return (
    <GridList
      aria-label="Droppable list"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => <GridEmptyState>No bands selected</GridEmptyState>}
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  )
}
