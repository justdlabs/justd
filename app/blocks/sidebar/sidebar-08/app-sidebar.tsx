"use client"

import * as React from "react"

import {
  IconArchive2,
  IconBrandApple,
  IconChevronLgDown,
  IconCommandRegular,
  IconCube,
  IconDashboard,
  IconDotsHorizontal,
  IconGraph,
  IconHeadphones,
  IconHighlight,
  IconLogout,
  IconSettings,
  IconShield,
  IconTrash,
  IconUpload
} from "justd-icons"
import {
  Avatar,
  Link,
  Menu,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection
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
          <strong className="font-medium group-data-[collapsible=dock]:hidden">Apple</strong>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSection>
          <SidebarItem isCurrent href="#">
            <IconDashboard />
            <SidebarLabel>Overview</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconCube />
            <SidebarLabel>Blog</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#" badge="12 New">
            <IconGraph />
            <SidebarLabel>Analytics</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconSettings />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Articles">
          {articles.map((item) => (
            <SidebarItem key={item.href}>
              {({ isHovered }) => (
                <>
                  <Link href="#discount">
                    <SidebarLabel>
                      {item.label} {item.label}
                    </SidebarLabel>
                  </Link>
                  {isHovered && (
                    <Menu>
                      <Menu.Trigger aria-label="Manage Discounts">
                        <IconDotsHorizontal />
                      </Menu.Trigger>
                      <Menu.Content placement="right top">
                        <Menu.Item href="#edit">
                          <IconHighlight />
                          Edit
                        </Menu.Item>
                        <Menu.Item href="#share">
                          <IconUpload />
                          Share
                        </Menu.Item>
                        <Menu.Item href="#archive">
                          <IconArchive2 />
                          Archive
                        </Menu.Item>
                        <Menu.Item isDanger={true} href="#delete">
                          <IconTrash />
                          Delete
                        </Menu.Item>
                      </Menu.Content>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <SidebarItem aria-label="Profile" data-slot="menu-trigger">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="group-data-[collapsible=dock]:hidden text-sm">
              <SidebarLabel>Kurt Cobain</SidebarLabel>
              <span className="block -mt-0.5 text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
          </SidebarItem>
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
      <SidebarRail />
    </Sidebar>
  )
}

const articles = [
  { href: "#article-1", label: "How to Improve Productivity" },
  { href: "#article-2", label: "The Future of Remote Work" },
  { href: "#article-3", label: "Top 10 Design Tips" },
  { href: "#article-4", label: "Guide to Mental Health" },
  { href: "#article-5", label: "AI in Everyday Life" }
]
