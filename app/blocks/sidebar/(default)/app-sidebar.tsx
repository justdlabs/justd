"use client"

import * as React from "react"

import { useTheme } from "@/components/theme-provider"
import {
  IconArchive,
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconCube,
  IconDashboard,
  IconEnvelope,
  IconGlobe,
  IconLogout,
  IconMessage,
  IconMoon,
  IconPeople,
  IconPersonAdd,
  IconPlus,
  IconSettings,
  IconShield,
  IconSun,
  IconWindow
} from "justd-icons"
import { usePathname } from "next/navigation"
import {
  Avatar,
  Link,
  Menu,
  Modal,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem as SidebarItemPrimitive,
  SidebarRail,
  SidebarSection,
  useSidebar
} from "ui"

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar()
  const collapsed = state === "collapsed"

  const pathname = usePathname()
  let intent: "sidebar" | "floating" | "inset"
  let collapsible: "offcanvas" | "dock" | "none"
  switch (pathname) {
    case "/blocks/sidebar/sidebar-02":
      intent = "inset"
      collapsible = "dock"
      break
    case "/blocks/sidebar/sidebar-03":
      intent = "floating"
      collapsible = "dock"
      break
    case "/blocks/sidebar/sidebar-05":
      intent = "sidebar"
      collapsible = "dock"
      break
    default:
      intent = "sidebar"
      collapsible = "offcanvas"
      break
  }
  return (
    <Sidebar collapsible={collapsible} intent={intent} {...props}>
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
          <SidebarItem icon={IconDashboard} href="/blocks/sidebar/sidebar-01">
            Overview
          </SidebarItem>
          <SidebarItem icon={IconSettings} href="/blocks/sidebar/sidebar-02">
            Settings
          </SidebarItem>
          <SidebarItem icon={IconCreditCard} href="/blocks/sidebar/sidebar-03">
            Billing
          </SidebarItem>
          <SidebarItem icon={IconEnvelope} href="/blocks/sidebar/sidebar-04" badge="49.67K">
            Newsletter
          </SidebarItem>
          <SidebarItem icon={IconMessage} href="/blocks/sidebar/sidebar-05" badge={35}>
            Messages
          </SidebarItem>
        </SidebarSection>

        {pathname === "/blocks/sidebar/sidebar-06" && (
          <>
            <SidebarSection icon={IconGlobe} collapsible title="Sites">
              <SidebarItem isCurrent icon={IconPlus} href="#">
                New site
              </SidebarItem>
              <SidebarItem icon={IconWindow} href="#">
                List Sites
              </SidebarItem>
            </SidebarSection>

            <SidebarSection defaultExpanded={false} icon={IconPersonAdd} collapsible title="Team">
              <SidebarItem icon={IconPeople} href="#">
                Team Overview
              </SidebarItem>
              <SidebarItem icon={IconPersonAdd} href="#">
                Add New Member
              </SidebarItem>
              <SidebarItem icon={IconCirclePerson} href="#">
                Manage Roles
              </SidebarItem>
            </SidebarSection>
          </>
        )}
        {pathname !== "/blocks/sidebar/sidebar-06" && (
          <>
            <SidebarSection collapsible title="Projects">
              <SidebarItem icon={IconCube} href="#">
                All Projects
              </SidebarItem>
              {pathname === "/blocks/sidebar/sidebar-05" ? (
                <Modal>
                  <SidebarItem icon={IconPlus}>Create New Project</SidebarItem>
                  <Modal.Content>
                    <Modal.Header title="New Project" />
                    <Modal.Footer>
                      <Modal.Close>Close</Modal.Close>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              ) : (
                <SidebarItem icon={IconPlus} href="#">
                  Create New Project
                </SidebarItem>
              )}
              <SidebarItem icon={IconArchive} href="#">
                Archived Projects
              </SidebarItem>
            </SidebarSection>

            {pathname !== "/blocks/sidebar/sidebar-05" && (
              <SidebarSection collapsible title="Team">
                <SidebarItem icon={IconPeople} href="#">
                  Team Overview
                </SidebarItem>
                <SidebarItem icon={IconPersonAdd} href="#">
                  Add New Member
                </SidebarItem>
                <SidebarItem icon={IconCirclePerson} href="#">
                  Manage Roles
                </SidebarItem>
              </SidebarSection>
            )}
          </>
        )}
      </SidebarContent>
      <SidebarFooter className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Menu.Trigger aria-label="Profile" data-slot="menu-trigger" className="group">
            <Avatar size="small" shape="square" src="/images/avatar/slash.jpg" />
            <span data-slot="menu-label">Saul Hudson</span>
            <IconChevronLgDown data-slot="chevron" />
          </Menu.Trigger>
          <Menu.Content
            placement={collapsed ? "right" : "top"}
            className={collapsed ? "sm:min-w-56" : "min-w-(--trigger-width)"}
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
      </SidebarFooter>
      {pathname !== "/blocks/sidebar/sidebar-02" && <SidebarRail />}
    </Sidebar>
  )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof SidebarItemPrimitive>) {
  const pathname = usePathname()
  return <SidebarItemPrimitive isCurrent={pathname === props.href} icon={Icon} {...props} />
}
