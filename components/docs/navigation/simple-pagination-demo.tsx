'use client'

import { Pagination, PaginationItem, PaginationList } from 'ui'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem role="first" href="#" />
        <PaginationItem role="previous" href="#" />
        <PaginationItem textValue="Segment" role="segment">
          <PaginationList aria-label="Pagination Segment" className="rounded-lg border">
            <PaginationItem role="label">1</PaginationItem>
            <PaginationItem role="separator" />
            <PaginationItem className="text-muted-fg" role="label">
              10
            </PaginationItem>
          </PaginationList>
        </PaginationItem>
        <PaginationItem role="next" href="#" />
        <PaginationItem role="last" href="#" />
      </PaginationList>
    </Pagination>
  )
}
