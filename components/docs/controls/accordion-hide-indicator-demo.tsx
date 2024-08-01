'use client'

import React from 'react'

import { Accordion, AccordionItem } from 'ui'

export default function AccordionHideIndicatorDemo() {
  return (
    <Accordion hideIndicator>
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
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit cards, PayPal, and Apple Pay.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Shipping times vary by location but typically take between 3-7 business days.'
  },
  {
    q: 'Can I track my order?',
    a: 'Yes, you can track your order using the tracking link provided in your shipping confirmation email.'
  }
]
