'use client'

import React, { useState } from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import {
  IconBrandBluesky,
  IconBrandTelegram,
  IconBrandTwitter,
  IconChevronsY,
  IconHashtag,
  IconHeadphones,
  IconLogout,
  IconMail,
  IconMessage,
  IconPersonAdd,
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
  MenuTrigger,
  Select,
  SelectItem,
  SubmenuTrigger,
  Switch
} from 'ui'

import { placements } from './single-menu-demo'

export default function MenuWithIconDemo() {
  const [showArrow, setShowArrow] = useState(false)
  const [selected, setSelected] = React.useState<Placement>('bottom')
  return (
    <>
      <OptionPreview className="space-y-2">
        <Switch isSelected={showArrow} onChange={() => setShowArrow(!showArrow)}>
          Show arrow
        </Switch>
        <Select
          className="[&>.btr]:h-8"
          selectedKey={selected}
          onSelectionChange={(v) => setSelected(v as Placement)}
          items={placements}
        >
          {(item) => <SelectItem id={item.name}>{item.name}</SelectItem>}
        </Select>
      </OptionPreview>
      <Menu>
        <MenuTrigger>
          <Avatar className="size-10" src="https://github.com/irsyadadl.png" />
        </MenuTrigger>
        <MenuContent showArrow={showArrow} placement={selected} className="min-w-64">
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
          <SubmenuTrigger>
            <MenuItem>
              <IconPersonAdd />
              <span>Invite users</span>
            </MenuItem>
            <MenuContent offset={8}>
              <MenuItem>
                <IconMail />
                <span>Email</span>
              </MenuItem>
              <MenuItem>
                <IconMessage />
                <span>Message</span>
              </MenuItem>
              <MenuSeparator />
              <SubmenuTrigger>
                <MenuItem>
                  <IconPersonAdd />
                  <span>Others</span>
                </MenuItem>
                <MenuContent offset={8}>
                  <MenuItem>
                    <IconBrandTelegram />
                    <span>Telegram</span>
                  </MenuItem>
                  <MenuItem>
                    <IconBrandBluesky />
                    <span>Bluesky</span>
                  </MenuItem>
                  <MenuItem>
                    <IconBrandTwitter />
                    <span>Twitter</span>
                  </MenuItem>
                </MenuContent>
              </SubmenuTrigger>
            </MenuContent>
          </SubmenuTrigger>
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
