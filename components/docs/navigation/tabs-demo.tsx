'use client'

import { Tab, TabList, TabPanel, Tabs } from 'ui'

export default function TabsDemo() {
  return (
    <Tabs aria-label="Packages">
      <TabList>
        <Tab id="t1">Tab 1</Tab>
        <Tab id="t2">Tab 2</Tab>
        <Tab id="t3">Tab 3</Tab>
      </TabList>
      <TabPanel id="t1">Tab 1 content</TabPanel>
      <TabPanel id="t2">Tab 2 content</TabPanel>
      <TabPanel id="t3">Tab 3 content</TabPanel>
    </Tabs>
  )
}
