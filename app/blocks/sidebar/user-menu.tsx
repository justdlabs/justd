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
import { Avatar, Menu } from "ui"

export default function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Profile" data-slot="menu-trigger">
        <Avatar size="small" shape="square" src="/images/avatar/cobain.jpg" />
        <span className="hidden group-data-[collapsible=dock]:hidden sm:flex items-center justify-center">
          Saul Hudson
          <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
        </span>
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="sm:group-data-[collapsible=dock]:min-w-(--trigger-width)">
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
  )
}
