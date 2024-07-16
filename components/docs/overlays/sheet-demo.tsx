'use client'

import React, { useState } from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { Button, Sheet, Switch } from '@/components/ui'
import { titleCase } from 'usemods'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function SheetDemo() {
    const [sheetSide, setSheetSide] = React.useState<Side>('left')
    const [isOpen, setIsOpen] = React.useState(false)

    const [settings, setSettings] = useState({
        closeButton: true,
        isStack: true
    })

    const sides: Side[] = ['left', 'right', 'top', 'bottom']

    const pressHandler = (side: Side, open: boolean) => {
        setSheetSide(side)
        setIsOpen(open)
    }

    return (
        <>
            <OptionPreview>
                <Switch
                    defaultSelected={settings.isStack}
                    onChange={() =>
                        setSettings({ ...settings, isStack: !settings.isStack })
                    }
                >
                    Toggle stack
                </Switch>
                <Switch
                    defaultSelected={settings.closeButton}
                    onChange={() =>
                        setSettings({ ...settings, closeButton: !settings.closeButton })
                    }
                >
                    With x button
                </Switch>
            </OptionPreview>
            <div className='grid grid-cols-2 gap-2'>
                {sides.map((side, idx) => (
                    <Button
                        variant='outline'
                        onPress={() => pressHandler(side, true)}
                        key={idx}
                    >
                        {titleCase(side)}
                    </Button>
                ))}
            </div>
            <Sheet.Overlay isOpen={isOpen} onOpenChange={setIsOpen}>
                <Sheet.Content
                    closeButton={settings.closeButton}
                    isStack={settings.isStack}
                    side={sheetSide}
                >
                    <Sheet.Header>
                        <Sheet.Title>{titleCase(sheetSide)}</Sheet.Title>
                        <Sheet.Description>
                            The sheet will go from {sheetSide} side.
                        </Sheet.Description>
                    </Sheet.Header>
                </Sheet.Content>
            </Sheet.Overlay>
        </>
    )
}
