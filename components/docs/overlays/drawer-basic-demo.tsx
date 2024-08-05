'use client'

import {
  buttonStyles,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from 'ui'

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonStyles({ appearance: 'outline' })}>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>The Beatles</DrawerTitle>
          <DrawerDescription>
            The Beatles were an English rock band formed in Liverpool in 1960, comprising John
            Lennon, Paul McCartney, George Harrison and Ringo Starr.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
