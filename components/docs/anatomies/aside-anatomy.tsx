import {
  IconBag,
  IconBell,
  IconChevronLgDown,
  IconCirclePerson,
  IconDashboard,
  IconSearch
} from "justd-icons"
import { Aside, Avatar, Button, Link, Menu } from "ui"

export default function AsideAnatomy() {
  return (
    <Aside.Layout
      navbar={
        <Aside.Responsive>
          <Button aria-label="Inbox" appearance="plain" shape="circle" size="square-petite">
            <IconBell />
          </Button>
          <Button aria-label="Search" appearance="plain" shape="circle" size="square-petite">
            <IconSearch />
          </Button>
          <Menu>
            <Button
              appearance="plain"
              size="square-petite"
              shape="circle"
              aria-label="Profile"
              className="group"
            >
              <Avatar size="medium" src="..." />
            </Button>
            <Menu.Content placement="top" className="min-w-[--trigger-width]">
              <Menu.Item href="#">...</Menu.Item>
            </Menu.Content>
          </Menu>
        </Aside.Responsive>
      }
      aside={
        <>
          <Aside.Header>
            <Link className="flex items-center gap-x-2" href="...">
              Brand
            </Link>
          </Aside.Header>
          <Aside.Content>
            <Aside.Section>
              <Aside.Item isCurrent icon={IconDashboard} href="#">
                ...
              </Aside.Item>
              {/* other items */}
            </Aside.Section>
            <Aside.Section title="Projects">
              <Aside.Item icon={IconBag} href="#">
                ...
              </Aside.Item>
              {/* other items */}
            </Aside.Section>

            <Aside.Section collapsible title="Team">
              <Aside.Item href="#">...</Aside.Item>
              {/* other items */}
            </Aside.Section>

            <Aside.Section collapsible defaultExpanded={false} title="Team">
              <Aside.Item href="#">...</Aside.Item>
              {/* other items */}
            </Aside.Section>
          </Aside.Content>
          <Aside.Footer className="lg:flex lg:flex-row hidden items-center">
            <Menu>
              <Button
                appearance="plain"
                aria-label="Profile"
                className="group w-full justify-start flex"
              >
                <Avatar
                  size="extra-small"
                  shape="square"
                  className="-ml-1.5"
                  src="https://github.com/irsyadadl.png"
                />
                Saul Hudson
                <IconChevronLgDown className="right-3 absolute group-pressed:rotate-180 transition-transform" />
              </Button>
              <Menu.Content placement="top" className="min-w-[--trigger-width]">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  Profile
                </Menu.Item>
                {/* other items */}
              </Menu.Content>
            </Menu>
          </Aside.Footer>
        </>
      }
    >
      <main className="relative">{/* children of layout */}</main>
    </Aside.Layout>
  )
}
