'use client'

import React from 'react'

import { IconDuplicate, IconFolder, IconHighlight, IconTrash, IconUpload } from 'justd-icons'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from 'ui'

export default function ContextMenuWithIconDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <IconFolder />
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <IconHighlight />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <IconDuplicate />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <IconUpload />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem isDanger>
          <IconTrash />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
