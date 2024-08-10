'use client'

import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from 'ui'

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nirvana: The Band</DrawerTitle>
          <DrawerDescription>
            A brief overview of the influential rock band Nirvana.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          Nirvana was an American rock band formed in 1987, fronted by Kurt Cobain, with Krist
          Novoselic on bass and Dave Grohl on drums. They played a key role in bringing grunge music
          into the mainstream with their breakthrough album, *Nevermind* (1991), which featured the
          hit single "Smells Like Teen Spirit."
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
