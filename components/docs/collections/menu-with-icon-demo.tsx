'use client'

import React from 'react'

import {
  IconCommandRegular,
  IconDashboard,
  IconDeviceDesktop,
  IconHeadphones,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun
} from 'justd-icons'
import { useTheme } from 'next-themes'
import {
  Avatar,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubMenu
} from 'ui'

export default function MenuWithIconDemo() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Menu>
      <MenuTrigger>
        <Avatar className="size-10" src="https://github.com/irsyadadl.png" />
      </MenuTrigger>
      <MenuContent placement="bottom" showArrow className="sm:min-w-64">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">Irsyad A. Panjaitan</span>
            <span className="font-normal text-muted-fg">@irsyadadl</span>
          </MenuHeader>
        </MenuSection>

        <MenuItem href="#dashboard">
          <IconDashboard />
          Dashboard
        </MenuItem>
        <MenuItem href="#settings">
          <IconSettings />
          Settings
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <IconCommandRegular />
          Command Menu
        </MenuItem>
        <SubMenu>
          <MenuItem>
            {resolvedTheme === 'light' ? (
              <IconSun />
            ) : resolvedTheme === 'dark' ? (
              <IconMoon />
            ) : (
              <IconDeviceDesktop />
            )}
            Switch theme
          </MenuItem>
          <MenuContent>
            <MenuItem onAction={() => setTheme('system')}>
              <IconDeviceDesktop /> System
            </MenuItem>
            <MenuItem onAction={() => setTheme('dark')}>
              <IconMoon /> Dark
            </MenuItem>
            <MenuItem onAction={() => setTheme('light')}>
              <IconSun /> Light
            </MenuItem>
          </MenuContent>
        </SubMenu>
        <MenuSeparator />
        <MenuItem href="#contact-s">
          <IconHeadphones />
          Contact Support
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#logout">
          <IconLogout />
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
