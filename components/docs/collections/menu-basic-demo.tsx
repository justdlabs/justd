'use client'

import { Menu, MenuContent, MenuItem, MenuTrigger } from 'ui'

export default function MenuBasicDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent placement="bottom">
        <MenuItem>Inbox</MenuItem>
        <MenuItem>Sent</MenuItem>
        <MenuItem>New Message</MenuItem>
        <MenuItem isDanger>Spam</MenuItem>
        <MenuItem isDisabled>Dang</MenuItem>
      </MenuContent>
    </Menu>
  )
}
