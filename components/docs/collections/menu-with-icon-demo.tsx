'use client'

import React, { useState } from 'react'

import {
  IconChevronsY,
  IconHashtag,
  IconHeadphones,
  IconLogout,
  IconPlus,
  IconSettings
} from '@irsyadadl/paranoid'
import type { Placement } from '@react-types/overlays'
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

export default function MenuWithIconDemo() {
  const [showArrow, setShowArrow] = useState(false)
  const [selected, setSelected] = React.useState<Placement>('bottom')
  return (
    <>
      <Menu>
        <MenuTrigger aria-label="Open Menu">
          <Avatar className="size-10" src="https://github.com/irsyadadl.png" />
        </MenuTrigger>
        <MenuContent className="min-w-64">
          <MenuSection>
            <MenuHeader separator>
              <span className="block">Irsyad A. Panjaitan</span>
              <span className="font-normal text-muted-fg">@irsyadadl</span>
            </MenuHeader>
          </MenuSection>
          <MenuItem onAction={() => setShowArrow(!showArrow)}>
            <IconChevronsY />
            {showArrow ? 'Hide' : 'Show'} Arrow
          </MenuItem>
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
