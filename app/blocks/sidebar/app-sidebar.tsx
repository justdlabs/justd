"use client"

import * as React from "react"

import {
  IconBrandApple,
  IconBuilding,
  IconCircleQuestionmark,
  IconCreditCard,
  IconCube,
  IconCurrencyDollar,
  IconDashboard,
  IconEnvelope,
  IconGraph,
  IconMegaphone,
  IconNotes,
  IconPackage,
  IconPeople,
  IconPercentBadge,
  IconSettings,
  IconShoppingBag,
  IconSupport,
  IconTicket,
  IconTruck
} from "justd-icons"
import {
  Link,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarRail,
  SidebarSection
} from "ui"

import UserMenu from "./user-menu"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">Apple</strong>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <SidebarItem isCurrent icon={IconDashboard} href="#">
            Overview
          </SidebarItem>
          <SidebarItem icon={IconShoppingBag} href="#">
            Orders
          </SidebarItem>
          <SidebarItem icon={IconCube} href="#">
            Products
          </SidebarItem>
          <SidebarItem icon={IconCreditCard} href="#" badge="4 Pending">
            Payments
          </SidebarItem>
          <SidebarItem icon={IconGraph} href="#" badge="12 New">
            Analytics
          </SidebarItem>
          <SidebarItem icon={IconPeople} href="#">
            Customers
          </SidebarItem>
          <SidebarItem icon={IconSettings} href="#">
            Settings
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Marketing">
          <SidebarItem icon={IconMegaphone} href="#">
            Campaigns
          </SidebarItem>
          <SidebarItem icon={IconPercentBadge} href="#">
            Discounts
          </SidebarItem>
          <SidebarItem icon={IconCurrencyDollar} href="#">
            Affiliates
          </SidebarItem>
          <SidebarItem icon={IconEnvelope} href="#">
            Email Marketing
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Support">
          <SidebarItem icon={IconTicket} href="#">
            Tickets
          </SidebarItem>
          <SidebarItem icon={IconSupport} href="#">
            Chat Support
          </SidebarItem>
          <SidebarItem icon={IconCircleQuestionmark} href="#">
            FAQ
          </SidebarItem>
          <SidebarItem icon={IconNotes} href="#">
            Documentation
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Inventory">
          <SidebarItem icon={IconPackage} href="#">
            Stock Levels
          </SidebarItem>
          <SidebarItem icon={IconBuilding} href="#">
            Warehouse
          </SidebarItem>
          <SidebarItem icon={IconTruck} href="#">
            Shipping
          </SidebarItem>
        </SidebarSection>
      </SidebarContent>

      <SidebarFooter className="lg:flex lg:flex-row hidden items-center">
        <UserMenu />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
