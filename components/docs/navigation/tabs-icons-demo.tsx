'use client'

import { IconApple, IconClock, IconCut, IconGear, IconPeople } from '@irsyadadl/paranoid'
import { Tab, TabList, TabPanel, Tabs } from 'ui'

export default function TabsIconsDemo() {
  return (
    <Tabs aria-label="Fitness App">
      <TabList>
        <Tab id="w">
          <IconCut /> Workouts
        </Tab>
        <Tab id="n">
          <IconApple /> Nutrition
        </Tab>
        <Tab id="t">
          <IconClock /> Tracker
        </Tab>
        <Tab id="c">
          <IconPeople /> Community
        </Tab>
        <Tab id="s">
          <IconGear /> Settings
        </Tab>
      </TabList>
      <TabPanel id="w">Find a variety of workout plans tailored to your fitness level and goals.</TabPanel>
      <TabPanel id="n">Get nutrition tips and meal plans to complement your fitness journey.</TabPanel>
      <TabPanel id="t">Track your progress with detailed statistics and analytics.</TabPanel>
      <TabPanel id="c">Connect with other fitness enthusiasts and join group challenges.</TabPanel>
      <TabPanel id="s">Customize your app settings and preferences for a personalized experience.</TabPanel>
    </Tabs>
  )
}
