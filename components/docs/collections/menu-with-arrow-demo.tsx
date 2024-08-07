'use client'

import React from 'react'

import { IconHashtag, IconHeadphones, IconLogout, IconPlus, IconSettings } from 'justd-icons'
import {
  Avatar,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuSection,
  MenuSeparator,
  MenuTrigger
} from 'ui'

export default function MenuWithArrowDemo() {
  return (
    <>
      <Menu>
        <MenuTrigger aria-label="Open Menu">
          <Avatar className="size-10" src="https://github.com/irsyadadl.png" />
        </MenuTrigger>
        <MenuContent placement="bottom" showArrow className="min-w-64">
          <MenuSection>
            <MenuHeader separator>
              <span className="block">Irsyad A. Panjaitan</span>
              <span className="font-normal text-muted-fg">@irsyadadl</span>
            </MenuHeader>
          </MenuSection>
          <MenuItem>
            <IconSettings />
            Settings
          </MenuItem>
          <MenuItem href="#">
            <IconPlus />
            Create Team
          </MenuItem>
          <MenuItem href="#">
            <IconHashtag />
            Command Menu
            <MenuKeyboard keys="⌘K" />
          </MenuItem>
          <MenuSeparator />
          <MenuItem href="#">
            <IconHeadphones />
            Contact Support
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <IconLogout />
            Log out
          </MenuItem>
        </MenuContent>
      </Menu>
    </>
  )
}
