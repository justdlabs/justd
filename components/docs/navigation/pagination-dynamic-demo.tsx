'use client'

import { Pagination, PaginationItem, PaginationList, PaginationSection } from 'ui'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem role="first" href="#" />
        <PaginationItem role="previous" href="#" />
        <PaginationSection aria-label="Pagination Segment" className="rounded-lg lg:hidden border">
          <PaginationItem role="label">1</PaginationItem>
          <PaginationItem role="separator" />
          <PaginationItem className="text-muted-fg" role="label">
            10
          </PaginationItem>
        </PaginationSection>
        <PaginationSection aria-label="Pagination Segment" className="hidden lg:flex" items={pages}>
          {(item) => (
            <PaginationItem id={item.value.toString()} isCurrent={item.value === 4} href="#">
              {item.value}
            </PaginationItem>
          )}
        </PaginationSection>
        <PaginationItem role="next" href="#" />
        <PaginationItem role="last" href="#" />
      </PaginationList>
    </Pagination>
  )
}
