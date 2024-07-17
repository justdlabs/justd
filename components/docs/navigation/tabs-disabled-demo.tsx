'use client'

import { Tab, TabList, TabPanel, Tabs } from 'ui'

export default function TabsDisabledDemo() {
  return (
    <Tabs disabledKeys={['c', 'a']} aria-label="Services">
      <TabList>
        <Tab id="o">Overview</Tab>
        <Tab id="f">Features</Tab>
        <Tab id="p">Pricing</Tab>
        <Tab id="c">Contact</Tab>
        <Tab id="a">About Us</Tab>
      </TabList>
      <TabPanel id="o">
        Welcome to our service! Here, you’ll find a brief overview of what we offer, our
        mission, and how we strive to provide value to our customers.
      </TabPanel>
      <TabPanel id="f">
        Our features include 24/7 support, real-time analytics, customizable dashboards,
        and seamless integration with your existing tools to enhance your productivity.
      </TabPanel>
      <TabPanel id="p">
        We offer competitive pricing plans to suit your needs, including a free tier, a
        standard plan for small teams, and a premium plan with advanced features for large
        organizations.
      </TabPanel>
      <TabPanel id="c">
        Get in touch with us through our contact page. We are here to help you with any
        inquiries, support requests, or feedback you may have.
      </TabPanel>
      <TabPanel id="a">
        Learn more about our company, our history, and the team behind our success. We are
        dedicated to delivering the best service to our customers.
      </TabPanel>
    </Tabs>
  )
}
