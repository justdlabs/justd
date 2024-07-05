'use client'

import { Breadcrumb, Breadcrumbs } from 'ui'

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs onAction={() => {}}>
      <Breadcrumb href="/">Home</Breadcrumb>
      <Breadcrumb href="/design-system">Design System</Breadcrumb>
      <Breadcrumb>Collections</Breadcrumb>
    </Breadcrumbs>
  )
}
