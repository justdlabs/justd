import { Blocks } from '@/components/blocks'
import { Cta } from '@/components/cta'
import { Hero } from '@/components/hero'
import { Resources } from '@/components/resources'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { Container } from 'ui'

export const metadata: Metadata = {
  title: siteConfig.name + ' is a Chill Set of React Components',
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export default function Page() {
  return (
    <>
      <Hero />
      <Container className="py-6 space-y-16 sm:py-16">
        <Blocks />
        <Resources />
      </Container>
      <Cta />
    </>
  )
}
