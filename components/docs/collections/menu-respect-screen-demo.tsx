'use client'

import React from 'react'

import { buttonStyles, Menu, MenuContent, MenuItem, MenuTrigger } from 'ui'

export default function MenuRespectScreenDemo() {
  return (
    <Menu respectScreen={false}>
      <MenuTrigger className={buttonStyles({ appearance: 'outline' })}>Open</MenuTrigger>
      <MenuContent placement="bottom" className="min-w-48">
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Reports</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Security</MenuItem>
        <MenuItem>Privacy</MenuItem>
        <MenuItem>Help</MenuItem>
      </MenuContent>
    </Menu>
  )
}
