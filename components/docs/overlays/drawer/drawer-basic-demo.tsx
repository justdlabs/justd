"use client"

import React from "react"

import { buttonStyles, Drawer } from "ui"

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ shape: "circle", appearance: "outline" })}>
        Open
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Nirvana: The Band</Drawer.Title>
          <Drawer.Description>
            A brief overview of the influential rock band Nirvana.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          Nirvana was an American rock band formed in 1987, fronted by Kurt Cobain, with Krist
          Novoselic on bass and Dave Grohl on drums. They played a key role in bringing grunge music
          into the mainstream with their breakthrough album, *Nevermind* (1991), which featured the
          hit single "Smells Like Teen Spirit."
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close shape="circle">Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
