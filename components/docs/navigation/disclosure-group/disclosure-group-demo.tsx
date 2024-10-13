'use client'

import React from 'react'

import { Disclosure, DisclosureGroup } from 'ui'

export default function DisclosureGroupDemo() {
  return (
    <DisclosureGroup>
      <Disclosure id={1}>
        <Disclosure.Trigger>What is a VPS?</Disclosure.Trigger>
        <Disclosure.Panel>
          A VPS is a Virtual Private Server, which provides dedicated resources on a server shared
          with other users, offering more control and customization than shared hosting.
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure id={2}>
        <Disclosure.Trigger>What is cloud hosting?</Disclosure.Trigger>
        <Disclosure.Panel>
          Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of
          being hosted on a single server, your data and resources are spread across multiple
          servers.
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure id={3}>
        <Disclosure.Trigger>What is shared hosting?</Disclosure.Trigger>
        <Disclosure.Panel>
          Shared hosting is a type of web hosting where multiple websites share the same server and
          its resources. It's an affordable option, but may have limitations on performance and
          customization.
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id={4}>
        <Disclosure.Trigger>What is dedicated hosting?</Disclosure.Trigger>
        <Disclosure.Panel>
          Dedicated hosting means your website is hosted on a single server exclusively reserved for
          your site. This provides maximum performance and customization, but at a higher cost.
        </Disclosure.Panel>
      </Disclosure>
    </DisclosureGroup>
  )
}
