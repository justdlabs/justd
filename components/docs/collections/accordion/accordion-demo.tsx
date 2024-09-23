"use client"

import React from "react"

import { Accordion } from "ui"

export default function AccordionDemo() {
  return (
    <Accordion>
      <Accordion.Item currentId={1}>
        <Accordion.Trigger>What is a VPS?</Accordion.Trigger>
        <Accordion.Content>
          A VPS is a Virtual Private Server, which provides dedicated resources on a server shared
          with other users, offering more control and customization than shared hosting.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item currentId={2}>
        <Accordion.Trigger>What is cloud hosting?</Accordion.Trigger>
        <Accordion.Content>
          Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of
          being hosted on a single server, your data and resources are spread across multiple
          servers.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item currentId={3}>
        <Accordion.Trigger>What is shared hosting?</Accordion.Trigger>
        <Accordion.Content>
          Shared hosting is a type of web hosting where multiple websites share the same server and
          its resources. It's an affordable option, but may have limitations on performance and
          customization.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item currentId={4}>
        <Accordion.Trigger>What is dedicated hosting?</Accordion.Trigger>
        <Accordion.Content>
          Dedicated hosting means your website is hosted on a single server exclusively reserved for
          your site. This provides maximum performance and customization, but at a higher cost.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
