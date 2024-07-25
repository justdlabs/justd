'use client'

import { Pagination, PaginationItem, PaginationList, PaginationSection } from 'ui'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem role="first" href="#" />
        <PaginationItem role="previous" href="#" />
        <PaginationSection aria-label="Pagination Segment" className="rounded-lg border">
          <PaginationItem role="label">1</PaginationItem>
          <PaginationItem role="separator" />
          <PaginationItem className="text-muted-fg" role="label">
            10
          </PaginationItem>
        </PaginationSection>
        <PaginationItem role="next" href="#" />
        <PaginationItem role="last" href="#" />
      </PaginationList>
    </Pagination>
  )
}
