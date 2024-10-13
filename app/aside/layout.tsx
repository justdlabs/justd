'use client'

import React from 'react'

import { useTheme } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'
import {
  IconArchive,
  IconBag,
  IconBell,
  IconBook,
  IconBrandJustd,
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
  IconSearch,
  IconSettings,
  IconShield,
  IconSun,
  IconSupport
} from 'justd-icons'
import { Aside, Avatar, Button, Link, Menu } from 'ui'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  return (
    <Aside.Layout
      navbar={
        <Aside.Responsive>
          <Button aria-label="Inbox" appearance="plain" shape="circle" size="square-petite">
            <IconBell />
          </Button>
          <Button aria-label="Search" appearance="plain" shape="circle" size="square-petite">
            <IconSearch />
          </Button>
          <ThemeSwitcher shape="circle" appearance="plain" />
          <Menu>
            <Button
              appearance="plain"
              size="square-petite"
              shape="circle"
              aria-label="Profile"
              className="group"
            >
              <Avatar size="medium" src="https://github.com/irsyadadl.png" />
            </Button>
            <Menu.Content placement="top" className="min-w-[--trigger-width]">
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
              <Menu.Item href="#">
                <IconBook />
                Documentation
              </Menu.Item>
              <Menu.Item href="#">
                <IconSupport />
                Contact Support
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item href="#">
                <IconLogout />
                Log out
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Aside.Responsive>
      }
      aside={
        <>
          <Aside.Header>
            <Link
              className="flex items-center gap-x-2"
              href="https://getjustd.com/docs/components/layouts/aside"
            >
              <IconBrandJustd />
              <strong>Justd</strong>
            </Link>
          </Aside.Header>
          <Aside.Content>
            <Aside.Section>
              <Aside.Item isCurrent icon={IconDashboard} href="#">
                Overview
              </Aside.Item>
              <Aside.Item icon={IconSettings} href="#">
                Settings
              </Aside.Item>
              <Aside.Item icon={IconCreditCard} href="#">
                Billing
              </Aside.Item>
              <Aside.Item icon={IconEnvelope} href="#" badge="49.67K">
                Newsletter
              </Aside.Item>
              <Aside.Item icon={IconMessage} href="#" badge={35}>
                Messages
              </Aside.Item>
            </Aside.Section>
            <Aside.Section title="Projects">
              <Aside.Item icon={IconBag} href="#">
                All Projects
              </Aside.Item>
              <Aside.Item icon={IconPlus} href="#">
                Create New Project
              </Aside.Item>
              <Aside.Item icon={IconArchive} href="#">
                Archived Projects
              </Aside.Item>
            </Aside.Section>

            <Aside.Section collapsible title="Team">
              <Aside.Item icon={IconPeople} href="#">
                Team Overview
              </Aside.Item>
              <Aside.Item icon={IconPersonAdd} href="#">
                Add New Member
              </Aside.Item>
              <Aside.Item href="#">Manage Roles</Aside.Item>
            </Aside.Section>
          </Aside.Content>
          <Aside.Footer className="lg:flex lg:flex-row hidden items-center">
            <Menu>
              <Button
                appearance="plain"
                aria-label="Profile"
                className="group w-full justify-start flex"
              >
                <Avatar
                  size="extra-small"
                  shape="square"
                  className="-ml-1.5"
                  src="https://github.com/irsyadadl.png"
                />
                Irsyad A. Panjaitan
                <IconChevronLgDown className="right-3 absolute group-pressed:rotate-180 transition-transform" />
              </Button>
              <Menu.Content placement="top" className="min-w-[--trigger-width]">
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
                <Menu.Item onAction={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  {theme === 'light' ? <IconMoon /> : <IconSun />}
                  Preferences
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Aside.Footer>
        </>
      }
    >
      <main className="relative">{children}</main>
    </Aside.Layout>
  )
}
