"use client"

import { Breadcrumbs } from "ui"

export default function BreadcrumbsSeparatorDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item separator="slash" href="#">
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item separator="slash" href="#">
        Design System
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Collections</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
