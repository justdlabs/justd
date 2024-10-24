"use client"

import React from "react"

import { Button, Drawer } from "ui"

type Sides = "bottom" | "top" | "left" | "right"

export default function DrawerDirectionDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSide, setOpenSide] = React.useState<Sides>("bottom")
  const sides: Sides[] = ["bottom", "top", "left", "right"]
  const handlePress = (side: Sides) => {
    setOpenSide(side)
    setIsOpen(true)
  }
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {sides.map((side) => (
          <Button key={side} appearance="outline" onPress={() => handlePress(side)}>
            {side}
          </Button>
        ))}
      </div>

      <Drawer side={openSide} isOpen={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title className="capitalize">{openSide}</Drawer.Title>
            <Drawer.Description>The drawer will slide in from the {openSide}.</Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Drawer.Close shape="circle" className="w-full">
              Close
            </Drawer.Close>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </div>
  )
}
