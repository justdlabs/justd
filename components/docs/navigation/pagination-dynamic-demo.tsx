'use client'

import {
  Pagination,
  PaginationFirst,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSeparator
} from 'ui'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="lg:hidden">
          <PaginationList className="rounded-lg border">
            <PaginationLabel className="font-semibold">1</PaginationLabel>
            <PaginationSeparator />
            <PaginationLabel className="text-muted-fg">6</PaginationLabel>
          </PaginationList>
        </PaginationItem>
        <PaginationItem className="hidden lg:inline">
          <PaginationList items={pages}>
            {(item) => (
              <PaginationItem id={item.value.toString()}>
                <PaginationLink isCurrent={item.value === 4} href="#">
                  {item.value}
                </PaginationLink>
              </PaginationItem>
            )}
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
