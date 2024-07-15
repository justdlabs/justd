'use client'

import GridGapDemo from '@/components/docs/surfaces/grid-gap-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <div className="py-6">
      <Container>
        <GridGapDemo />
      </Container>
    </div>
  )
}

function Number(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className="text-2xl w-full h-32 font-bold grid place-content-center"
      {...props}
    />
  )
}
