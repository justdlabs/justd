import React from 'react'

import { CardListBox } from '@/app/(app)/components/partials/card-list-box'
import { OnThisPage } from '@/app/(app)/components/partials/on-this-page'
import { Header } from '@/components/header'
import { siteConfig } from '@/resources/config/site'
import type { Metadata } from 'next'
import { Container } from 'ui'

export const metadata: Metadata = {
  title: 'Components / ' + siteConfig.name,
  description: 'Over 50 accessible components, neatly grouped into sections. Guaranteed usability for all!',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name
}

export default function Page() {
  return (
    <div>
      <Header>
        <span className="text-fg">Comp</span>
        <span className="text-muted-fg">onents</span>
      </Header>
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
