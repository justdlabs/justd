'use client'

import {
  Avatar,
  Container,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger
} from 'ui'
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
} from '@irsyadadl/paranoid'
import React from 'react'
import TableDemo from '@/components/docs/collections/table-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'
import TabsDemo from '@/components/docs/navigation/tabs-demo'
import CheckboxDemo from '@/components/docs/forms/checkbox-demo'
import { LoginForm } from '@/app/sink/login-form'

export default function Page() {
  return (
    <div className="py-6">
      <Container>
        <div className="mx-auto max-w-md">
          <LoginForm/>
        </div>
        <div className="max-w-sm mx-auto">

          {/*<Menu>*/}
          {/*  <MenuTrigger>*/}
          {/*    <Avatar className="size-10" src="https://github.com/irsyadadl.png" />*/}
          {/*  </MenuTrigger>*/}
          {/*  <MenuContent showArrow placement="bottom" className="min-w-64">*/}
          {/*    <MenuSection>*/}
          {/*      <MenuHeader separator>*/}
          {/*        <span className="block">Irsyad A. Panjaitan</span>*/}
          {/*        <span className="font-normal text-muted-fg">@irsyadadl</span>*/}
          {/*      </MenuHeader>*/}
          {/*    </MenuSection>*/}
          {/*    <MenuItem>*/}
          {/*      <IconSettings />*/}
          {/*      Settings*/}
          {/*    </MenuItem>*/}
          {/*    <MenuItem href="#">*/}
          {/*      <IconPlus />*/}
          {/*      Create Team*/}
          {/*    </MenuItem>*/}
          {/*    <MenuItem href="#">*/}
          {/*      <IconHashtag />*/}
          {/*      Command Menu*/}
          {/*      <MenuKeyboard keys="⌘K" />*/}
          {/*    </MenuItem>*/}
          {/*    <SubmenuTrigger>*/}
          {/*      <MenuItem>*/}
          {/*        <IconPersonAdd />*/}
          {/*        <span>Invite users</span>*/}
          {/*      </MenuItem>*/}
          {/*      <MenuContent offset={8}>*/}
          {/*        <MenuItem>*/}
          {/*          <IconMail />*/}
          {/*          <span>Email</span>*/}
          {/*        </MenuItem>*/}
          {/*        <MenuItem>*/}
          {/*          <IconMessage />*/}
          {/*          <span>Message</span>*/}
          {/*        </MenuItem>*/}
          {/*        <MenuSeparator />*/}
          {/*        <SubmenuTrigger>*/}
          {/*          <MenuItem>*/}
          {/*            <IconPersonAdd />*/}
          {/*            <span>Others</span>*/}
          {/*          </MenuItem>*/}
          {/*          <MenuContent offset={8}>*/}
          {/*            <MenuItem>*/}
          {/*              <IconBrandTelegram />*/}
          {/*              <span>Telegram</span>*/}
          {/*            </MenuItem>*/}
          {/*            <MenuItem>*/}
          {/*              <IconBrandBluesky />*/}
          {/*              <span>Bluesky</span>*/}
          {/*            </MenuItem>*/}
          {/*            <MenuItem>*/}
          {/*              <IconBrandTwitter />*/}
          {/*              <span>Twitter</span>*/}
          {/*            </MenuItem>*/}
          {/*          </MenuContent>*/}
          {/*        </SubmenuTrigger>*/}
          {/*      </MenuContent>*/}
          {/*    </SubmenuTrigger>*/}
          {/*    <MenuSeparator />*/}
          {/*    <MenuItem href="#">*/}
          {/*      <IconHeadphones />*/}
          {/*      Contact Support*/}
          {/*    </MenuItem>*/}
          {/*    <MenuSeparator />*/}
          {/*    <MenuItem>*/}
          {/*      <IconLogout />*/}
          {/*      Log out*/}
          {/*    </MenuItem>*/}
          {/*  </MenuContent>*/}
          {/*</Menu>*/}
        </div>
        {/*<PaginationDynamicDemo />*/}
        {/*<Separator className="my-8" />*/}
        {/*<PaginationDemo />*/}
        {/*<Separator className="my-8" />*/}
        {/*<SimplePaginationDemo />*/}
      </Container>
    </div>
  )
}
