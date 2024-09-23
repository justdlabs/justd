"use client"

import React from "react"

import { ContextMenu } from "ui"

export default function ContextMenuDangerDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Open</ContextMenu.Item>
        <ContextMenu.Item>Rename</ContextMenu.Item>
        <ContextMenu.Item>Duplicate</ContextMenu.Item>
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item isDanger>Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
