"use client"

import React from "react"

import { ContextMenu } from "ui"

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item id="view">View</ContextMenu.Item>
        <ContextMenu.Item id="edit">Edit</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item id="gsu">Generate Short URL</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
