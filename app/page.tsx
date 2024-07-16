import { AvatarMedia } from '@/app/sink/avatar-media'
import { Buttons } from '@/app/sink/buttons'
import { CardSink } from '@/app/sink/card-sink'
import { Cta } from '@/app/sink/cta'
import { LoginForm } from '@/app/sink/login-form'
import { Menus } from '@/app/sink/menus'
import { NoteStatuses } from '@/app/sink/note-statuses'
import { ModalOverlays, PopoverOverlays } from '@/app/sink/overlays'
import { Pickers } from '@/app/sink/pickers'
import { ShowMore } from '@/app/sink/show-more'
import SwitchDemo from '@/components/docs/forms/switch-demo'
import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import { Hero } from '@/components/hero'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { Container } from 'ui'

export const metadata: Metadata = {
  title: siteConfig.name  + ' is a Chill Set of React Components',
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
            <Buttons />
            <LoginForm />
            <Menus />
            <Pickers />
            <PopoverOverlays />
            <ModalOverlays />
            <AvatarMedia />
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
