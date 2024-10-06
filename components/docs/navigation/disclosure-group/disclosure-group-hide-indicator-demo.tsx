"use client"

import React from "react"

import { Disclosure, DisclosureGroup } from "ui"

export default function DisclosureGroupHideIndicatorDemo() {
  return (
    <DisclosureGroup hideIndicator>
      {faqs.map((item, index) => (
        <Disclosure key={index} id={index}>
          <Disclosure.Trigger>{item.q}</Disclosure.Trigger>
          <Disclosure.Panel>{item.a}</Disclosure.Panel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  )
}

const faqs = [
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit cards, PayPal, and Apple Pay."
  },
  {
    q: "How long does shipping take?",
    a: "Shipping times vary by location but typically take between 3-7 business days."
  },
  {
    q: "Can I track my order?",
    a: "Yes, you can track your order using the tracking link provided in your shipping confirmation email."
  }
]
