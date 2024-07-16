'use client'

import { Accordion } from '@/components/ui'

export default function AccordionDemo() {
    return (
        <Accordion className='w-full'>
            <Accordion.Item key='1'>
                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                <Accordion.Content>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item key='2'>
                <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                <Accordion.Content>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item key='3'>
                <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                <Accordion.Content>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    )
}
