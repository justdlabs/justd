import { Drawer } from 'ui'

export default function DrawerAnatomy() {
  return (
    <Drawer>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Nirvana: The Band</Drawer.Title>
          <Drawer.Description>
            A brief overview of the influential rock band Nirvana.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>...</Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close shape="circle">Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
