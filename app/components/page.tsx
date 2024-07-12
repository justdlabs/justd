import React from 'react'

import { CardListBox } from '@/app/components/partials/card-list-box'
import { Hero } from '@/app/components/partials/hero'
import { OnThisPage } from '@/app/components/partials/on-this-page'
import { Container } from 'ui'

export default function Page() {
  return (
    <div>
      <Hero />
      <div className="bg-muted/35 py-10 lg:py-16">
        <Container>
          <div className="flex lg:flex-row flex-col items-start gap-12">
            <OnThisPage />
            <CardListBox />
          </div>
        </Container>
      </div>
    </div>
  )
}
