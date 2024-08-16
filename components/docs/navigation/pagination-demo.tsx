'use client'

import { Pagination } from 'ui'

export default function PaginationDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item variant="first" href="#" />
        <Pagination.Item variant="previous" href="#" />
        <Pagination.Item href="#">1</Pagination.Item>
        <Pagination.Item href="#" isCurrent>
          2
        </Pagination.Item>
        <Pagination.Item variant="ellipsis" />
        <Pagination.Item variant="next" href="#" />
        <Pagination.Item variant="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
