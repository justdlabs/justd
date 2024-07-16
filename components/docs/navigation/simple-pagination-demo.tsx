'use client'

import {
  Pagination,
  PaginationFirst,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSeparator
} from 'ui'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationList className="rounded-lg border">
            <PaginationItem>
              <PaginationLabel className="font-semibold">1</PaginationLabel>
            </PaginationItem>
            <PaginationItem>
              <PaginationSeparator />
            </PaginationItem>
            <PaginationItem>
              <PaginationLabel className="text-muted-fg">10</PaginationLabel>
            </PaginationItem>
          </PaginationList>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast href="#" />
        </PaginationItem>
      </PaginationList>
    </Pagination>
  )
}
