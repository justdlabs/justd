"use client"

import { IconSearch } from "justd-icons"
import { Breadcrumbs, Button, Separator, SidebarNav, SidebarTrigger } from "ui"

export default function AppSidebarNav() {
  return (
    <SidebarNav>
      <span className="flex items-center gap-x-4">
        <SidebarTrigger className="-mx-2" />
        <Separator className="h-6 md:block hidden" orientation="vertical" />
        <Breadcrumbs className="md:flex hidden">
          <Breadcrumbs.Item href="/blocks/sidebar/sidebar-01">Dashboard</Breadcrumbs.Item>
          <Breadcrumbs.Item>Newsletter</Breadcrumbs.Item>
        </Breadcrumbs>
      </span>

      <div className="flex sm:hidden items-center gap-x-2">
        <Button appearance="plain" aria-label="Search..." size="square-petite">
          <IconSearch />
        </Button>
      </div>
    </SidebarNav>
  )
}
