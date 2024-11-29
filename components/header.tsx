"use client"

import React from "react"

import { Container, Heading } from "ui"

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-4 pt-12 lg:py-16 border-b ">
      <Container>
        <Heading level={1} className="text-2xl sm:text-3xl">
          {children}
        </Heading>
      </Container>
    </div>
  )
}
