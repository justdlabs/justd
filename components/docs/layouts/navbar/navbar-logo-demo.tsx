"use client"

import { IconBag2, IconBrandApple, IconSearch } from "justd-icons"
import { Button, Navbar } from "ui"

export default function NavbarLogoDemo() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="#">
          <IconBrandApple className="size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="#">Store</Navbar.Item>
          <Navbar.Item href="#">Mac</Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconBag2 />
            </Button>
          </Navbar.Flex>
        </Navbar.Flex>
      </Navbar.Compact>
      {/*<Navbar.Inset>*/}
      {/*  <Heading>Home</Heading>*/}
      {/*</Navbar.Inset>*/}
    </Navbar>
  )
}
