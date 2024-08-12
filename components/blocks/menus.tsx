'use client'

import { CardBlock } from '@/components/blocks'
import {
  IconBrandBluesky,
  IconBrandTelegram,
  IconBrandTwitter,
  IconHashtag,
  IconHeadphones,
  IconLogout,
  IconMail,
  IconMessage,
  IconPersonAdd,
  IconPlus,
  IconSettings
} from 'justd-icons'
import { Avatar, Menu } from 'ui'

export function Menus() {
  return (
    <CardBlock>
      <Menu>
        <Menu.Trigger aria-label="Open Menu">
          <Avatar shape="square" size="medium" src="https://github.com/irsyadadl.png" />
        </Menu.Trigger>
        <Menu.Content showArrow placement="bottom" className="min-w-64">
          <Menu.Section>
            <Menu.Header separator>
              <span className="block">Irsyad A. Panjaitan</span>
              <span className="font-normal text-muted-fg">@irsyadadl</span>
            </Menu.Header>
          </Menu.Section>
          <Menu.Item>
            <IconSettings />
            Settings
          </Menu.Item>
          <Menu.Item href="#">
            <IconPlus />
            Create Team
          </Menu.Item>
          <Menu.Item href="#">
            <IconHashtag />
            Command Menu
            <Menu.Keyboard keys="⌘K" />
          </Menu.Item>
          <Menu.Submenu>
            <Menu.Item>
              <IconPersonAdd />
              <span>Invite users</span>
            </Menu.Item>
            <Menu.Content offset={8}>
              <Menu.Item>
                <IconMail />
                <span>Email</span>
              </Menu.Item>
              <Menu.Item>
                <IconMessage />
                <span>Message</span>
              </Menu.Item>
              <Menu.Separator />
              <Menu.Submenu>
                <Menu.Item>
                  <IconPersonAdd />
                  <span>Others</span>
                </Menu.Item>
                <Menu.Content offset={8}>
                  <Menu.Item>
                    <IconBrandTelegram />
                    <span>Telegram</span>
                  </Menu.Item>
                  <Menu.Item>
                    <IconBrandBluesky />
                    <span>Bluesky</span>
                  </Menu.Item>
                  <Menu.Item>
                    <IconBrandTwitter />
                    <span>Twitter</span>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Submenu>
            </Menu.Content>
          </Menu.Submenu>
          <Menu.Separator />
          <Menu.Item href="#">
            <IconHeadphones />
            Contact Support
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item>
            <IconLogout />
            Log out
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </CardBlock>
  )
}
