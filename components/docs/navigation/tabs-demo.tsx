'use client'

import { Tabs } from '@/components/ui'

export default function TabsDemo() {
    return (
        <Tabs aria-label='Packages'>
            <Tabs.List>
                <Tabs.Label id='t1'>First Tab</Tabs.Label>
                <Tabs.Label id='t2'>Second Tab</Tabs.Label>
                <Tabs.Label id='t3'>Third Tab</Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='t1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tabs.Content>
            <Tabs.Content id='t2'>
                Consectetur adipisicing elit. Quibusdam, suscipit.
            </Tabs.Content>
            <Tabs.Content id='t3'>
                Amet fuga reprehenderit earum adipisci maiores voluptas.
            </Tabs.Content>
        </Tabs>
    )
}
