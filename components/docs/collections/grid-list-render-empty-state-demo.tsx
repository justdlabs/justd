'use client'

import { GridEmptyState, GridList } from 'ui'

export default function GridListRenderEmptyStateDemo() {
  return <GridList items={items} aria-label="Select items" selectionMode="multiple" className="min-w-64" renderEmptyState={() => <GridEmptyState>No bands selected</GridEmptyState>} />
}

const items: Iterable<any> | undefined = []
