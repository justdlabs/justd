'use client'

import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui'

export default function AccordionDisabledDemo() {
  return (
    <Accordion disabledKeys={[1, 2, 4]}>
      {faqs.map((item, index) => (
        <AccordionItem key={index} currentId={index}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const faqs = [
  {
    q: 'Do you offer gift wrapping options?',
    a: 'Yes, we provide gift wrapping services for a small additional charge at checkout.'
  },
  {
    q: 'Can I return a gift card?',
    a: 'Sorry, gift cards are non-refundable and cannot be returned.'
  },
  {
    q: 'What are your store hours?',
    a: 'Our store is open from 9 AM to 9 PM on weekdays and 10 AM to 6 PM on weekends.'
  },
  {
    q: 'Do you have a loyalty program?',
    a: 'Yes, we have a loyalty program where you can earn points for every purchase and redeem them for discounts.'
  },
  {
    q: 'How do I update my billing information?',
    a: 'You can update your billing information through your account settings on our website.'
  },
  {
    q: 'Are there any discounts for bulk orders?',
    a: 'Yes, we offer discounts on bulk orders. Please contact our sales team for more details.'
  }
]
