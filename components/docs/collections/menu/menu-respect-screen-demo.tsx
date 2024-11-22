"use client"

import React from "react"

import { Button, Menu } from "ui"

export default function MenuRespectScreenDemo() {
  return (
    <Menu respectScreen={false}>
      <Button appearance="outline">Open</Button>
      <Menu.Content placement="bottom" className="min-w-48">
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Reports</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Security</Menu.Item>
        <Menu.Item>Privacy</Menu.Item>
        <Menu.Item>Help</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
