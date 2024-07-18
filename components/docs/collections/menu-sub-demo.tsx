'use client'

import React from 'react'

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger
} from 'ui'

export default function MenuSubDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent className="min-w-48" placement="bottom">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <SubmenuTrigger>
          <MenuItem>More</MenuItem>
          <MenuContent offset={8}>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>API Keys</MenuItem>
            <MenuSeparator />
            <SubmenuTrigger>
              <MenuItem>Advanced</MenuItem>
              <MenuContent>
                <MenuItem>System Logs</MenuItem>
                <MenuItem>Export Data</MenuItem>
                <MenuItem>User Roles</MenuItem>
              </MenuContent>
            </SubmenuTrigger>
          </MenuContent>
        </SubmenuTrigger>
      </MenuContent>
    </Menu>
  )
}
