'use client'

import React from 'react'

import { Button, Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from 'ui'

export default function DrawerBasicDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)} appearance="outline">
        Open Drawer
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>The Beatles</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            The Beatles were an English rock band formed in Liverpool in 1960, comprising John Lennon, Paul McCartney,
            George Harrison and Ringo Starr.
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
