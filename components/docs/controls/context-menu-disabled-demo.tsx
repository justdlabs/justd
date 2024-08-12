'use client'

import React from 'react'

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from 'ui'

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem id="view">View</ContextMenuItem>
        <ContextMenuItem id="edit">Edit</ContextMenuItem>
        <ContextMenuItem id="gsu" isDisabled>
          Generate Short URL
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
