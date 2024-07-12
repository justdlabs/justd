'use client'

import React from 'react'

import { Header } from 'react-aria-components'
import { Container, Heading } from 'ui'

export function Hero() {
  return (
    <Header className="bg-background pb-4 pt-12 lg:py-16 border-b ">
      <Container>
        <Heading level={1} className="text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="text-fg">Comp</span>
          <span className="text-muted-fg">onents</span>
        </Heading>
      </Container>
    </Header>
  )
}
