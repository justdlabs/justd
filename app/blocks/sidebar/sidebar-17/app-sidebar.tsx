"use client"

import * as React from "react"

import { IconBrandApple } from "justd-icons"
import { Calendar, Link, Sidebar, SidebarContent, SidebarHeader, SidebarLabel, SidebarRail, SidebarSection } from "ui"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <SidebarLabel className="font-medium">Apple</SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <Calendar />
        </SidebarSection>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
