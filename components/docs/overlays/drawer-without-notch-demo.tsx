'use client'

import React from 'react'

import {
  buttonStyles,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from 'ui'

export default function DrawerWithoutNotchDemo() {
  return (
    <Drawer withNotch={false}>
      <DrawerTrigger className={buttonStyles({ shape: 'circle', appearance: 'outline' })}>
        Open Drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>The Beatles</DrawerTitle>
          <DrawerDescription>
            The Beatles were an English rock band formed in Liverpool in 1960, comprising John
            Lennon, Paul McCartney, George Harrison and Ringo Starr.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose shape="circle">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
