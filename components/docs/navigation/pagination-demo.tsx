'use client'

import { Pagination, PaginationItem, PaginationList } from 'ui'

export default function PaginationDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem role="first" href="#" />
        <PaginationItem role="previous" href="#" />
        <PaginationItem href="#">1</PaginationItem>
        <PaginationItem href="#" isCurrent>
          2
        </PaginationItem>
        <PaginationItem role="ellipsis" />
        <PaginationItem role="next" href="#" />
        <PaginationItem role="last" href="#" />
      </PaginationList>
    </Pagination>
  )
}
