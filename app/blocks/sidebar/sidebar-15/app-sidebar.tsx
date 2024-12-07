"use client"

import * as React from "react"

import {
  IconChevronLgDown,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSettings,
  IconShield
} from "justd-icons"
import { Avatar, Menu, Sidebar, SidebarFooter } from "ui"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarFooter>
        <Menu>
          <Menu.Trigger aria-label="Profile" data-slot="menu-trigger">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="group-data-[collapsible=dock]:hidden text-sm">
              Kurt Cobain
              <span className="block -mt-0.5 text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
          </Menu.Trigger>
          <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </Menu.Header>
            </Menu.Section>

            <Menu.Item href="#dashboard">
              <IconDashboard />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#settings">
              <IconSettings />
              Settings
            </Menu.Item>
            <Menu.Item href="#security">
              <IconShield />
              Security
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <IconCommandRegular />
              Command Menu
            </Menu.Item>

            <Menu.Item href="#contact">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#logout">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  )
}
