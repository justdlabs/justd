'use client'

import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationSeparator
} from 'ui'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationContent className="rounded-lg border">
            <PaginationItem>
              <PaginationLabel className="font-semibold">1</PaginationLabel>
            </PaginationItem>
            <PaginationItem>
              <PaginationSeparator />
            </PaginationItem>
            <PaginationItem>
              <PaginationLabel className="text-muted-fg">10</PaginationLabel>
            </PaginationItem>
          </PaginationContent>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
