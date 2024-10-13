'use client'

import { Pagination } from 'ui'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item variant="first" href="#" />
        <Pagination.Item variant="previous" href="#" />
        <Pagination.Section aria-label="Pagination Segment" className="rounded-lg border">
          <Pagination.Item variant="label">1</Pagination.Item>
          <Pagination.Item variant="separator" />
          <Pagination.Item className="text-muted-fg" variant="label">
            10
          </Pagination.Item>
        </Pagination.Section>
        <Pagination.Item variant="next" href="#" />
        <Pagination.Item variant="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
