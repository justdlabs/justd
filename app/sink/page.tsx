'use client'

import TextFieldSuffixButtonDemo from '@/components/docs/forms/text-field-suffix-button-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <div className="py-6">
      <Container>
        <div className="max-w-sm">
          <TextFieldSuffixButtonDemo />
        </div>
        {/*<PaginationDynamicDemo />*/}
        {/*<Separator className="my-8" />*/}
        {/*<PaginationDemo />*/}
        {/*<Separator className="my-8" />*/}
        {/*<SimplePaginationDemo />*/}
      </Container>
    </div>
  )
}
