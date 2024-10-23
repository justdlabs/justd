"use client"

import * as React from "react"

import { useTheme } from "@/components/theme-provider"
import {
  IconArchive,
  IconBag,
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconDashboard,
  IconEnvelope,
  IconLogout,
  IconMessage,
  IconMoon,
  IconPeople,
  IconPersonAdd,
  IconPlus,
  IconSettings,
  IconShield,
  IconSun
} from "justd-icons"
import { Avatar, Button, Link, Menu, Sidebar, useSidebar } from "ui"

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">Apple</strong>
        </Link>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Section>
          <Sidebar.Item icon={IconDashboard} href="/blocks/sidebar/sidebar-02">
            Overview
          </Sidebar.Item>
          <Sidebar.Item icon={IconSettings} href="/blocks/sidebar/sidebar-02">
            Settings
          </Sidebar.Item>
          <Sidebar.Item isCurrent icon={IconCreditCard} href="#">
            Billing
          </Sidebar.Item>
          <Sidebar.Item icon={IconEnvelope} href="#" badge="49.67K">
            Newsletter
          </Sidebar.Item>
          <Sidebar.Item icon={IconMessage} href="#" badge={35}>
            Messages
          </Sidebar.Item>
        </Sidebar.Section>
        <Sidebar.Section title="Projects">
          <Sidebar.Item icon={IconBag} href="#">
            All Projects
          </Sidebar.Item>
          <Sidebar.Item icon={IconPlus} href="#">
            Create New Project
          </Sidebar.Item>
          <Sidebar.Item icon={IconArchive} href="#">
            Archived Projects
          </Sidebar.Item>
        </Sidebar.Section>

        <Sidebar.Section collapsible title="Team">
          <Sidebar.Item icon={IconPeople} href="#">
            Team Overview
          </Sidebar.Item>
          <Sidebar.Item icon={IconPersonAdd} href="#">
            Add New Member
          </Sidebar.Item>
          <Sidebar.Item href="#">Manage Roles</Sidebar.Item>
        </Sidebar.Section>
      </Sidebar.Content>
      <Sidebar.Footer className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Button appearance="plain" aria-label="Profile" slot="menu-trigger" className="group">
            <Avatar size="small" shape="square" src="/images/sidebar/profile-slash.jpg" />
            <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
              Saul Hudson
              <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
            </span>
          </Button>
          <Menu.Content
            placement={collapsed ? "right" : "top"}
            className={collapsed ? "sm:min-w-56" : "min-w-[--trigger-width]"}
          >
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
            <Menu.Separator />
            <Menu.Item onAction={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <IconMoon /> : <IconSun />}
              Preferences
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Sidebar.Footer>
    </Sidebar>
  )
}
