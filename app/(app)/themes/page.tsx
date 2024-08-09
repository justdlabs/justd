import { Header } from '@/components/header'
import { siteConfig } from '@/resources/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Themes / ' + siteConfig.name,
  description:
    'Curated themes, carefully selected just for you, ready to be copied, pasted, and seamlessly integrated into your apps, giving your projects a polished and custom vibe without the hassle.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name
}
export default function Page() {
  return (
    <div>
      <Header>
        <span className="text-fg">Them</span>
        <span className="text-muted-fg">es</span>
      </Header>

      {/*<Themes/>*/}
    </div>
  )
}
