'use client'

import React from 'react'

import { type Selection } from '@react-types/shared'
import { Button, Menu, MenuCheckboxItem, MenuContent, MenuHeader, MenuSection } from 'ui'

export default function MultipleMenuDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['status']))
  return (
    <Menu>
      <Button appearance="outline">Open</Button>
      <MenuContent
        placement="bottom"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuSection>
          <MenuHeader separator>Content Preferences</MenuHeader>
          <MenuCheckboxItem id="autoPlay">Auto-Play Videos</MenuCheckboxItem>
          <MenuCheckboxItem id="highQuality">High-Quality Streaming</MenuCheckboxItem>
          <MenuCheckboxItem id="exclusiveContent">Exclusive Releases</MenuCheckboxItem>
          <MenuCheckboxItem id="subtitles">Default Subtitles</MenuCheckboxItem>
          <MenuCheckboxItem id="recommendations">Personalized Recommendations</MenuCheckboxItem>
          <MenuCheckboxItem id="backgroundPlay">Background Play</MenuCheckboxItem>
          <MenuCheckboxItem id="download">Allow Downloads</MenuCheckboxItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}
