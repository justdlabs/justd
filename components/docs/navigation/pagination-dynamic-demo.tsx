'use client'

import { Pagination } from 'ui'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item role="first" href="#" />
        <Pagination.Item role="previous" href="#" />
        <Pagination.Section aria-label="Pagination Segment" className="rounded-lg lg:hidden border">
          <Pagination.Item role="label">1</Pagination.Item>
          <Pagination.Item role="separator" />
          <Pagination.Item className="text-muted-fg" role="label">
            10
          </Pagination.Item>
        </Pagination.Section>
        <Pagination.Section
          aria-label="Pagination Segment"
          className="hidden lg:flex"
          items={pages}
        >
          {(item) => (
            <Pagination.Item id={item.value.toString()} isCurrent={item.value === 4} href="#">
              {item.value}
            </Pagination.Item>
          )}
        </Pagination.Section>
        <Pagination.Item role="next" href="#" />
        <Pagination.Item role="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
