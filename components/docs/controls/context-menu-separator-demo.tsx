'use client'

import React from 'react'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from 'ui'

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem id="view">View</ContextMenuItem>
        <ContextMenuItem id="edit">Edit</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem id="gsu">Generate Short URL</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
