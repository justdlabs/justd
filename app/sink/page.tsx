'use client'

import ToasterPositionsDemo from '@/components/docs/statuses/toaster-positions-demo'
import { Container, Toaster } from 'ui'

export default function Page() {
  return (
    <div className="py-6">
      <Container>
        <Toaster />
        <ToasterPositionsDemo />
      </Container>
    </div>
  )
}
