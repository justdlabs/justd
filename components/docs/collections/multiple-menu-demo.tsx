'use client'

import { Selection } from '@react-types/shared'
import React from 'react'
import { Button, Menu, MenuCheckboxItem, MenuContent, MenuHeader, MenuSection } from 'ui'

export default function MultipleMenuDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['status']))
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <MenuContent
        placement="bottom"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        className="w-56"
        disabledKeys={['activity']}
      >
        <MenuSection>
          <MenuHeader separator>Appearance</MenuHeader>
          <MenuCheckboxItem id="status">Status Bar</MenuCheckboxItem>
          <MenuCheckboxItem id="activity">Activity Bar</MenuCheckboxItem>
          <MenuCheckboxItem id="panel">Panel</MenuCheckboxItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}
