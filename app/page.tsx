import { Hero } from '@/components/hero'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.name + ' / irsyad.co',
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export default function Page() {
  return (
    <div>
      <Hero />
    </div>
  )
}
