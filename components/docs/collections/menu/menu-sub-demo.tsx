"use client"

import React from "react"

import { Button, Menu } from "ui"

export default function MenuSubDemo() {
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <Menu.Content placement="bottom">
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Reports</Menu.Item>
        <Menu.Separator />
        <Menu.Submenu>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Content>
            <Menu.Item>General</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Separator />
            <Menu.Submenu>
              <Menu.Item>Privacy</Menu.Item>
              <Menu.Content>
                <Menu.Item>Data Sharing</Menu.Item>
                <Menu.Item>Cookies</Menu.Item>
                <Menu.Separator />
                <Menu.Submenu>
                  <Menu.Item>Advanced</Menu.Item>
                  <Menu.Content>
                    <Menu.Item>Encryption</Menu.Item>
                    <Menu.Item>Access Logs</Menu.Item>
                    <Menu.Item>API Keys</Menu.Item>
                  </Menu.Content>
                </Menu.Submenu>
              </Menu.Content>
            </Menu.Submenu>
          </Menu.Content>
        </Menu.Submenu>
        <Menu.Item>Help</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
