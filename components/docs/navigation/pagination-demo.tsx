'use client'

import { Pagination } from 'ui'

export default function PaginationDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item role="first" href="#" />
        <Pagination.Item role="previous" href="#" />
        <Pagination.Item href="#">1</Pagination.Item>
        <Pagination.Item href="#" isCurrent>
          2
        </Pagination.Item>
        <Pagination.Item role="ellipsis" />
        <Pagination.Item role="next" href="#" />
        <Pagination.Item role="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
