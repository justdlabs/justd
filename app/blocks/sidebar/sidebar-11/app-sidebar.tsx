"use client"

import * as React from "react"

import { IconBrandApple } from "justd-icons"
import {
  Link,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSectionGroup,
  SidebarSeparator
} from "ui"

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
        <SidebarSectionGroup>
          <SidebarSection>
            {mainNav.map((item, itemIndex) => (
              <SidebarItem isCurrent={item.isCurrent} key={itemIndex} href="#" badge={item.badge}>
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            ))}
          </SidebarSection>

          <SidebarSeparator />

          {navigation.map((section, sectionIndex) => (
            <SidebarSection key={sectionIndex} title={section.label}>
              {section.items.map((item, itemIndex) => (
                <SidebarItem key={itemIndex} href="#" badge={item.badge}>
                  <SidebarLabel>{item.label}</SidebarLabel>
                </SidebarItem>
              ))}
            </SidebarSection>
          ))}
        </SidebarSectionGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const mainNav = [
  { label: "Dashboard", badge: undefined, isCurrent: true },
  { label: "Notifications", badge: undefined },
  { label: "Messages", badge: undefined },
  { label: "Profile" }
]

const navigation = [
  {
    label: "Management",
    items: [
      { label: "Users", badge: 120 },
      { label: "Teams", badge: 15 },
      { label: "Projects", badge: 8 },
      { label: "Tasks", badge: 50 }
    ]
  },
  {
    label: "Finance",
    items: [
      { label: "Transactions", badge: 23 },
      { label: "Invoices", badge: 12 },
      { label: "Reports" },
      { label: "Budgets" }
    ]
  }
]
