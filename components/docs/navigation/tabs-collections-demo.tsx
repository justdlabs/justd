'use client'

import React from 'react'

import { Collection } from 'react-aria-components'
import { Tab, TabList, TabPanel, Tabs } from 'ui'

const tabs = [
  { id: 1, title: 'Tab 1', content: 'Content for tab 1' },
  { id: 2, title: 'Tab 2', content: 'Content for tab 2' },
  { id: 3, title: 'Tab 3', content: 'Content for tab 3' }
]
export default function TabsCollectionsDemo() {
  return (
    <Tabs aria-label="Project Management">
      <TabList aria-label="Dynamic tabs" items={tabs}>
        {(item) => <Tab>{item.title}</Tab>}
      </TabList>

      <Collection items={tabs}>{(item) => <TabPanel key={item.id}>{item.content}</TabPanel>}</Collection>
    </Tabs>
  )
}
