'use client'

import React from 'react'

import { Container, Header as HeaderPrimitive, Heading } from 'ui'


export function Header({ children }: { children: React.ReactNode }) {
  return (
    <HeaderPrimitive className="bg-background pb-4 pt-12 lg:py-16 border-b ">
      <Container>
        <Heading level={1} className="text-2xl sm:text-3xl font-bold tracking-tight">
          {children}
        </Heading>
      </Container>
    </HeaderPrimitive>
  )
}
