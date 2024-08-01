'use client'

import React from 'react'

import AccordionDefaultExpandDemo from '@/components/docs/controls/accordion-default-expand-demo'
import AccordionDemo from '@/components/docs/controls/accordion-demo'
import { Container } from 'ui'

export default function App() {
  return (
    <Container className="py-24">
      <div className="max-w-2xl space-y-10 mx-auto">
        <AccordionDemo />
        <AccordionDefaultExpandDemo />
      </div>
    </Container>
  )
}
