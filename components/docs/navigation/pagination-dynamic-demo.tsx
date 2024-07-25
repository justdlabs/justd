'use client'

import { Pagination, PaginationItem, PaginationList } from 'ui'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem role="first" href="#" />
        <PaginationItem role="previous" href="#" />
        <PaginationItem textValue="Segment" role="segment" className="lg:hidden">
          <PaginationList className="rounded-lg border">
            <PaginationItem role="label">1</PaginationItem>
            <PaginationItem role="separator" />
            <PaginationItem className="text-muted-fg" role="label">
              10
            </PaginationItem>
          </PaginationList>
        </PaginationItem>
        <PaginationItem textValue="Segment" className="hidden lg:flex" role="segment">
          <PaginationList aria-label="Pagination Segment" items={pages}>
            {(item) => (
              <PaginationItem id={item.value.toString()} isCurrent={item.value === 4} href="#">
                {item.value}
              </PaginationItem>
            )}
          </PaginationList>
        </PaginationItem>
        <PaginationItem role="next" href="#" />
        <PaginationItem role="last" href="#" />
      </PaginationList>
    </Pagination>
  )
}
