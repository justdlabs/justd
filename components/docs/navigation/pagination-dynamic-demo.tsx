'use client'

import { Collection } from 'react-aria-components'
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationSeparator
} from 'ui'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="lg:hidden">
          <PaginationContent className="rounded-lg border">
            <PaginationLabel className="font-semibold">1</PaginationLabel>
            <PaginationSeparator />
            <PaginationLabel className="text-muted-fg">6</PaginationLabel>
          </PaginationContent>
        </PaginationItem>
        <PaginationItem className="hidden lg:inline">
          <PaginationContent>
            <Collection items={pages}>
              {(item) => (
                <PaginationItem id={item.value.toString()}>
                  <PaginationLink isActive={item.value === 4} href="#">
                    {item.value}
                  </PaginationLink>
                </PaginationItem>
              )}
            </Collection>
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
