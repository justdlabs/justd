import { Menu } from "ui"

export default function MenuAnatomy() {
  return (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Inbox</Menu.Item>
        <Menu.Item>Sent</Menu.Item>
        <Menu.Item>New Message</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
