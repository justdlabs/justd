'use client'

import { siteConfig } from '@/config/site'
import { Header, Text } from 'react-aria-components'
import { Container, Heading } from 'ui'

export function Hero() {
  return (
    <div className="py-6 lg:py-16 border-b">
      <Container>
        <Header>
          <Heading level={1} className="max-w-xl text-2xl lg:text-5xl mb-2 lg:mb-6">
            Making your site accessible ain't rocket science.
          </Heading>
          <Text className="text-base lg:text-xl max-w-2xl block leading-relaxed text-muted-fg">
            {siteConfig.description}
          </Text>
        </Header>
      </Container>
    </div>
  )
}
