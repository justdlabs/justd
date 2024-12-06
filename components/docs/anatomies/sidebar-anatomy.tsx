import * as React from "react"

import { IconDashboard } from "justd-icons"
import {
  Link,
  Menu,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarLabel,
  SidebarProvider,
  SidebarRail,
  SidebarSection
} from "ui"

export default function SidebarAnatomy() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />

        <SidebarContent>
          <SidebarSection>
            <SidebarItem>
              <IconDashboard />
              <SidebarLabel />
            </SidebarItem>
            <SidebarItem />
            <SidebarItem />
          </SidebarSection>
          <SidebarSection collapsible title="Articles">
            <SidebarItem>
              <Link href="#discount">
                <SidebarLabel />
              </Link>
              <Menu>
                <Menu.Trigger />
                <Menu.Content placement="right top">
                  <Menu.Item />
                  <Menu.Item />
                </Menu.Content>
              </Menu>
            </SidebarItem>
          </SidebarSection>
        </SidebarContent>

        <SidebarFooter />
        <SidebarRail />
      </Sidebar>
      <SidebarInset />
    </SidebarProvider>
  )
}
