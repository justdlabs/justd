'use client'

import React from 'react'

import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from 'ui'

export default function MenuDangerDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent className="min-w-48" placement="bottom">
        <MenuItem>View</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuSeparator />
        <MenuItem isDanger>Delete</MenuItem>
      </MenuContent>
    </Menu>
  )
}
