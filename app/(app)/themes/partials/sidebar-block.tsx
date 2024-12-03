"use client"

import * as React from "react"

import {
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconDashboard,
  IconEnvelope,
  IconLogout,
  IconMessage,
  IconPeople,
  IconPersonAdd,
  IconSearch,
  IconSettings,
  IconShield
} from "justd-icons"
import {
  Avatar,
  Button,
  Link,
  Menu,
  SearchField,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarNav,
  SidebarProvider,
  SidebarRail,
  SidebarSection,
  SidebarTrigger
} from "ui"

export function SidebarBlock({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarNav isSticky>
          <span className="flex items-center gap-x-3">
            <SidebarTrigger className="-mx-2" />
            <Separator className="h-6 sm:block hidden" orientation="vertical" />
          </span>
          <SearchField className="sm:inline hidden sm:ml-1.5" />
          <div className="flex sm:hidden items-center gap-x-2">
            <Button appearance="plain" aria-label="Search..." size="square-petite">
              <IconSearch />
            </Button>
            <Menu>
              <Menu.Trigger aria-label="Profile" className="flex items-center gap-x-2 group">
                <Avatar size="small" shape="circle" src="/images/sidebar/profile-slash.jpg" />
                <IconChevronLgDown className="size-4 group-data-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-(--trigger-width)">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  Profile
                </Menu.Item>
                <Menu.Item href="#">
                  <IconSettings />
                  Settings
                </Menu.Item>
                <Menu.Item href="#">
                  <IconShield />
                  Security
                </Menu.Item>
                <Menu.Item href="#">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        </SidebarNav>
        <div className="p-4 lg:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
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
          <SidebarItem icon={IconSettings} href="#">
            Settings
          </SidebarItem>
          <SidebarItem icon={IconCreditCard} href="#">
            Billing
          </SidebarItem>
          <SidebarItem icon={IconEnvelope} href="#" badge="49.67K">
            Newsletter
          </SidebarItem>
          <SidebarItem icon={IconMessage} href="#" badge={35}>
            Messages
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Team">
          <SidebarItem icon={IconPeople} href="#">
            Team Overview
          </SidebarItem>
          <SidebarItem icon={IconPersonAdd} href="#">
            Add New Member
          </SidebarItem>
          <SidebarItem href="#">Manage Roles</SidebarItem>
        </SidebarSection>
      </SidebarContent>
      <SidebarFooter className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Button appearance="plain" aria-label="Profile" data-slot="menu-trigger" className="group">
            <Avatar size="small" shape="square" src="/images/sidebar/profile-slash.jpg" />
            <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
              Saul Hudson
              <IconChevronLgDown className="right-3 size-4 absolute group-data-pressed:rotate-180 transition-transform" />
            </span>
          </Button>
          <Menu.Content className="min-w-(--trigger-width)">
            <Menu.Item href="#">
              <IconCirclePerson />
              Profile
            </Menu.Item>
            <Menu.Item href="#">
              <IconSettings />
              Settings
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
