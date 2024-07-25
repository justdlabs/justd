import { AvatarMedia } from '@/app/(app)/sink/avatar-media'
import { Buttons } from '@/app/(app)/sink/buttons'
import { CardSink } from '@/app/(app)/sink/card-sink'
import { Cta } from '@/app/(app)/sink/cta'
import { LoginForm } from '@/app/(app)/sink/login-form'
import { Menus } from '@/app/(app)/sink/menus'
import { ModalOverlays, PopoverOverlays } from '@/app/(app)/sink/overlays'
import { Pickers } from '@/app/(app)/sink/pickers'
import { ShowMore } from '@/app/(app)/sink/show-more'
import SwitchDemo from '@/components/docs/controls/switch-demo'
import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import { Hero } from '@/components/hero'
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
      <Container>
        <div className="py-6 sm:py-16">
          <div className="grid mb-6 lg:grid-cols-3 gap-6">
            <LoginForm />
            <Menus />
            <Pickers />
            <PopoverOverlays />
            <ModalOverlays />
            <AvatarMedia />
            <Buttons />
            <CardSink>
              <SwitchDemo />
            </CardSink>
            <CardSink>
              <PaginationDemo />
            </CardSink>
          </div>

          <ShowMore />
        </div>
      </Container>
      <Cta />
    </>
  )
}
