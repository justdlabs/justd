"use client"

import * as React from "react"

import { AppSidebar } from "@/app/blocks/sidebar/sidebar-03/app-sidebar"
import {
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield
} from "justd-icons"
import { Avatar, Button, Menu, Separator, Sidebar } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar.Provider>
      <AppSidebar collapsible="dock" intent="floating" />
      <Sidebar.Inset>
        <header className="sticky justify-between sm:justify-start top-0 bg-bg h-[3.57rem] px-4 flex items-center gap-x-2">
          <span className="flex items-center gap-x-2">
            <Sidebar.Trigger className="-ml-1" />
            <Separator className="h-6 sm:block hidden" orientation="vertical" />
            <strong className="font-semibold">Overview</strong>
          </span>

          <div className="flex sm:hidden items-center gap-x-2">
            <Button appearance="plain" aria-label="Search..." size="square-petite">
              <IconSearch />
            </Button>
            <Menu>
              <Menu.Trigger aria-label="Profile" className="flex items-center gap-x-2 group">
                <Avatar size="small" shape="circle" src="/images/sidebar/profile-slash.jpg" />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[--trigger-width]">
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
        </header>
        <div className="p-4 lg:p-6">{children}</div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
