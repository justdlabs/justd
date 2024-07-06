'use client'

import * as React from 'react'
import { Header, Heading, HeadingProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const sinkCardStyles = tv({
  slots: {
    root: 'sk border rounded-lg break-inside-avoid',
    header: 'border-b px-6 py-4',
    title: 'font-mono lg:text-sm',
    content: 'p-6 w-full',
    center: 'items-center flex w-full justify-center'
  }
})

const { root, header, title, content, center } = sinkCardStyles()

interface SinkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isCentered?: boolean
}

const SinkCard = ({ isCentered, title, className, children, ...props }: SinkCardProps) => {
  return (
    <div {...props} className={root({ className })}>
      <SinkCardHeader>
        <SinkCardTitle>{title}</SinkCardTitle>
      </SinkCardHeader>
      <SinkCardContent>{isCentered ? <SinkCardCenter>{children}</SinkCardCenter> : children}</SinkCardContent>
    </div>
  )
}

interface SinkCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SinkCardHeader = ({ className, children, ...props }: SinkCardHeaderProps) => {
  return (
    <Header {...props} className={header({ className })}>
      {children}
    </Header>
  )
}

const SinkCardTitle = ({ className, children, ...props }: HeadingProps) => {
  return (
    <Heading {...props} className={title({ className })}>
      {children}
    </Heading>
  )
}

interface SinkCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SinkCardContent = ({ className, children, ...props }: SinkCardContentProps) => {
  return (
    <div {...props} className={content({ className })}>
      {children}
    </div>
  )
}

interface SinkCardCenterProps extends React.HTMLAttributes<HTMLDivElement> {}
const SinkCardCenter = ({ className, children, ...props }: SinkCardCenterProps) => {
  return (
    <div {...props} className={center({ className })}>
      {children}
    </div>
  )
}

export { SinkCard, SinkCardCenter, SinkCardContent, SinkCardHeader, SinkCardTitle }
