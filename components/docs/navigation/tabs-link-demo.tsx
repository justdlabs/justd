'use client'

import { Tab, TabList, Tabs } from 'ui'

const navs = [
  { url: '/', label: 'Home' },
  { url: '/docs/getting-started/introduction', label: 'Docs' },
  { url: '/components', label: 'Components' },
  { url: 'https://paranoijustd.co', label: 'Paranoid' }
]

export default function TabsLinkDemo() {
  return (
    <Tabs aria-label="Navbar">
      <TabList items={navs}>
        {(item) => (
          <Tab id={item.label} href={item.url}>
            {item.label}
          </Tab>
        )}
      </TabList>
    </Tabs>
  )
}
