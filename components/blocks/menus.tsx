'use client'

import { CardBlock } from '@/components/blocks'
import { IconBrandBluesky, IconBrandTelegram, IconBrandTwitter, IconHashtag, IconHeadphones, IconLogout, IconMail, IconMessage, IconPersonAdd, IconPlus, IconSettings } from '@irsyadadl/paranoid'
import { Avatar, Menu, MenuContent, MenuHeader, MenuItem, MenuKeyboard, MenuSection, MenuSeparator, MenuTrigger, SubmenuTrigger } from 'ui'

export function Menus() {
  return (
    <CardBlock>
      <Menu>
        <MenuTrigger aria-label="Open Menu">
          <Avatar shape="square" size="medium" src="https://github.com/irsyadadl.png" />
        </MenuTrigger>
        <MenuContent showArrow placement="bottom" className="min-w-64">
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
    </CardBlock>
  )
}
