'use client'

import React from 'react'

import { IconHamburger } from '@irsyadadl/paranoid'
import { Collection } from 'react-aria-components'
import { Select, SelectItem, Tab, TabList, TabPanel, Tabs, useMediaQuery } from 'ui'

const tabs = [
  { id: 1, title: 'Overview', content: 'This is the overview tab content.' },
  { id: 2, title: 'Features', content: 'Details about the features are listed here.' },
  { id: 3, title: 'Pricing', content: 'Find the pricing information on this tab.' },
  { id: 4, title: 'Reviews', content: 'Read user reviews and ratings here.' },
  { id: 5, title: 'Support', content: 'Contact our support team on this tab.' },
  { id: 6, title: 'Guarantee', content: 'Our satisfaction guarantee details are here.' },
  { id: 7, title: 'FAQ', content: 'Frequently asked questions are answered here.' }
]

export default function TabsResponsiveDemo() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return isMobile ? (
    <Select className="sm:hidden block" prefix={<IconHamburger />} items={tabs}>
      {(item) => <SelectItem textValue={item.title}>{item.title}</SelectItem>}
    </Select>
  ) : (
    <Tabs className="sm:flex hidden" aria-label="Project Management">
      <TabList aria-label="Dynamic tabs" items={tabs}>
        {(item) => <Tab>{item.title}</Tab>}
      </TabList>
      <Collection items={tabs}>
        {(item) => <TabPanel key={item.id}>{item.content}</TabPanel>}
      </Collection>
    </Tabs>
  )
}
