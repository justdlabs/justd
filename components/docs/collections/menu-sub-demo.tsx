'use client'

import React from 'react'

import { buttonStyles, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, SubMenu } from 'ui'

export default function MenuSubDemo() {
  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ appearance: 'outline' })}>Open</MenuTrigger>
      <MenuContent placement="bottom" className="sm:min-w-48">
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Reports</MenuItem>
        <MenuSeparator />
        <SubMenu>
          <MenuItem>Settings</MenuItem>
          <MenuContent>
            <MenuItem>General</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Privacy</MenuItem>
            <MenuItem>Data Sharing</MenuItem>
          </MenuContent>
        </SubMenu>
        <MenuItem>Help</MenuItem>
      </MenuContent>
    </Menu>
  )
}
