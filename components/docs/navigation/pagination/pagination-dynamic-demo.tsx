"use client"

import { Pagination } from "ui"

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item variant="first" href="#" />
        <Pagination.Item variant="previous" href="#" />
        <Pagination.Section aria-label="Pagination Segment" className="rounded-lg border lg:hidden">
          <Pagination.Item variant="label">1</Pagination.Item>
          <Pagination.Item variant="separator" />
          <Pagination.Item className="text-muted-fg" variant="label">
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
        <Pagination.Item variant="next" href="#" />
        <Pagination.Item variant="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
