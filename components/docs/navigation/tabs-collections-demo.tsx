'use client'

import React from 'react'

import { IconDotsVertical } from '@irsyadadl/paranoid'
import { Collection } from 'react-aria-components'
import { Menu, MenuContent, MenuItem, MenuTrigger, Tab, TabList, TabPanel, Tabs } from 'ui'

export default function TabsCollectionsDemo() {
  const [tabs, setTabs] = React.useState([
    { id: 1, title: 'Tab 1', content: 'Content for tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content for tab 2' },
    { id: 3, title: 'Tab 3', content: 'Content for tab 3' }
  ])

  const addTab = () => {
    setTabs((tabs) => [
      ...tabs,
      {
        id: tabs.length + 1,
        title: `Tab ${tabs.length + 1}`,
        content: `Content for tab ${tabs.length + 1}`
      }
    ])
  }

  const removeTab = () => {
    if (tabs.length > 1) {
      setTabs((tabs) => tabs.slice(0, -1))
    }
  }

  return (
    <Tabs aria-label="Project Management">
      <div className="flex justify-between">
        <TabList aria-label="Dynamic tabs" items={tabs}>
          {(item) => <Tab>{item.title}</Tab>}
        </TabList>
        <Menu>
          <MenuTrigger>
            <IconDotsVertical />
          </MenuTrigger>
          <MenuContent showArrow placement="left">
            <MenuItem onAction={addTab}>Add tab</MenuItem>
            <MenuItem onAction={removeTab}>Remove tab</MenuItem>
          </MenuContent>
        </Menu>
      </div>

      <Collection items={tabs}>{(item) => <TabPanel key={item.id}>{item.content}</TabPanel>}</Collection>
    </Tabs>
  )
}
