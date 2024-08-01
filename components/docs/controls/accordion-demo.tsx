'use client'

import React from 'react'

import { Accordion, AccordionItem } from 'ui'

export default function AccordionDemo() {
  return (
    <Accordion>
      {faqs.map((faq, index) => (
        <AccordionItem title={faq.q} key={index}>
          {faq.a}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const faqs = [
  {
    q: 'What is a VPS?',
    a: 'A VPS is a Virtual Private Server, which provides dedicated resources on a server shared with other users, offering more control and customization than shared hosting.'
  },
  {
    q: 'How does a VPS differ from shared hosting?',
    a: 'Unlike shared hosting, a VPS provides isolated resources, ensuring that your applications do not share resources with other users, which can lead to better performance and security.'
  },
  {
    q: 'What are the benefits of using a VPS?',
    a: 'Benefits include increased performance, flexibility to install any software, enhanced security, and the ability to scale resources based on your needs.'
  }
]
