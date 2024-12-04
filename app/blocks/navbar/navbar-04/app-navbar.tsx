"use client"

import * as React from "react"

import { IconBrandApple, IconDashboard, IconLogout, IconShoppingBag } from "justd-icons"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export default function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  return (
    <>
      <Navbar {...props}>
        <Navbar.Nav>
          <Navbar.Logo href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-6 lg:size-5" />
          </Navbar.Logo>
          <Navbar.Section>
            <Navbar.Item isDisabled href="#">
              Enabled
            </Navbar.Item>
            <Navbar.Item href="#">Disabled</Navbar.Item>
          </Navbar.Section>
        </Navbar.Nav>

        <Navbar.Compact>
          <Navbar.Flex>
            <Navbar.Trigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6 lg:mx-1" />
            <Navbar.Logo href="/docs/components/layouts/navbar">
              <IconBrandApple className="size-5" />
            </Navbar.Logo>
          </Navbar.Flex>
          <Navbar.Flex>
            <Navbar.Flex>
              <Button appearance="plain" size="square-petite" aria-label="Your Bag">
                <IconShoppingBag />
              </Button>
            </Navbar.Flex>
            <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
            <Menu>
              <Menu.Trigger aria-label="Open Menu">
                <Avatar alt="cobain" size="small" shape="square" src="/images/avatar/cobain.jpg" />
              </Menu.Trigger>
              <Menu.Content placement="bottom right" showArrow className="sm:min-w-56">
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">Kurt Cobain</span>
                    <span className="font-normal text-muted-fg">@cobain</span>
                  </Menu.Header>
                </Menu.Section>

                <Menu.Item href="#dashboard">
                  <IconDashboard />
                  Dashboard
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#logout">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Navbar.Flex>
        </Navbar.Compact>

        <Navbar.Inset>{children}</Navbar.Inset>
      </Navbar>
    </>
  )
}
