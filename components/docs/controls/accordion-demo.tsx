'use client'

import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui'

export default function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem currentId={1}>
        <AccordionTrigger>What is a VPS?</AccordionTrigger>
        <AccordionContent>A VPS is a Virtual Private Server, which provides dedicated resources on a server shared with other users, offering more control and customization than shared hosting.</AccordionContent>
      </AccordionItem>

      <AccordionItem currentId={2}>
        <AccordionTrigger>What is cloud hosting?</AccordionTrigger>
        <AccordionContent>Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of being hosted on a single server, your data and resources are spread across multiple servers.</AccordionContent>
      </AccordionItem>

      <AccordionItem currentId={3}>
        <AccordionTrigger>What is shared hosting?</AccordionTrigger>
        <AccordionContent>Shared hosting is a type of web hosting where multiple websites share the same server and its resources. It's an affordable option, but may have limitations on performance and customization.</AccordionContent>
      </AccordionItem>
      <AccordionItem currentId={4}>
        <AccordionTrigger>What is dedicated hosting?</AccordionTrigger>
        <AccordionContent>Dedicated hosting means your website is hosted on a single server exclusively reserved for your site. This provides maximum performance and customization, but at a higher cost.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
