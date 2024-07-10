'use client'

import ColorAreaDemo from '@/components/docs/colors/color-area-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <Container>
      <div className="py-6 flex-col flex gap-6 max-w-sm">
        <ColorAreaDemo />
      </div>
    </Container>
  )
}
