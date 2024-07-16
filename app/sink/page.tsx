'use client'

import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import PaginationDynamicDemo from '@/components/docs/navigation/pagination-dynamic-demo'
import SimplePaginationDemo from '@/components/docs/navigation/simple-pagination-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <div className="py-6">
      <Container>
        <PaginationDynamicDemo />
        {/*<Separator className="my-8" />*/}
        <PaginationDemo />
        {/*<Separator className="my-8" />*/}
        <SimplePaginationDemo />
      </Container>
    </div>
  )
}
