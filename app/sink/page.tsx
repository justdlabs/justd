'use client'

import TooltipDemo from '@/components/docs/overlays/tooltip-demo'
import ToasterPositionsDemo from '@/components/docs/statuses/toaster-positions-demo'
import GridGapDemo from '@/components/docs/surfaces/grid-gap-demo'
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
