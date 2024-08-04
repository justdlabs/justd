'use client'

import React from 'react'

import { Button, SheetContent, SheetDescription, SheetHeader, SheetTitle } from 'ui'
import { titleCase } from 'usemods'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function SheetPositionDemo() {
  const [sheetSide, setSheetSide] = React.useState<Side>('left')
  const [isOpen, setIsOpen] = React.useState(false)

  const sides: Side[] = ['left', 'right', 'top', 'bottom']

  const pressHandler = (side: Side, open: boolean) => {
    setSheetSide(side)
    setIsOpen(open)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {sides.map((side, idx) => (
          <Button appearance="outline" onPress={() => pressHandler(side, true)} key={idx}>
            {titleCase(side)}
          </Button>
        ))}
      </div>
      <SheetContent isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
        <SheetHeader>
          <SheetTitle>{titleCase(sheetSide)}</SheetTitle>
          <SheetDescription>The sheet will go from {sheetSide} side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </>
  )
}
