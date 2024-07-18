'use client'

import React from 'react'

import { Menu, MenuContent, MenuItem, MenuTrigger } from 'ui'

export default function MenuDisabledDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent className="min-w-48" placement="bottom">
        <MenuItem id="view">View</MenuItem>
        <MenuItem id="edit">Edit</MenuItem>
        <MenuItem id="gsu" isDisabled>
          Generate Short URL
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
