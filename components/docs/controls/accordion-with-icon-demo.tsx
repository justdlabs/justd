'use client'

import React from 'react'

import {
  IconBell,
  IconCreditCard,
  IconDownload,
  IconSettings,
  IconShield,
  IconSupport
} from '@irsyadadl/paranoid'
import { Accordion, AccordionItem } from 'ui'

export default function AccordionWithIconDemo() {
  return (
    <Accordion>
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          title={
            <>
              {faq.icon}
              {faq.q}
            </>
          }
        >
          {faq.a}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const items = [
  {
    icon: <IconSettings />,
    q: 'Personal Settings',
    a: 'You can update your profile, change your password, and manage your account settings here.'
  },
  {
    icon: <IconBell />,
    q: 'Notifications',
    a: 'Manage your notifications preferences, including alerts, emails, and push notifications.'
  },
  {
    icon: <IconShield />,
    q: 'Privacy Options',
    a: 'Adjust your privacy settings to control who can see your information and contact you.'
  },
  {
    icon: <IconCreditCard />,
    q: 'Payment Methods',
    a: 'Add, remove, or update your payment methods including credit cards and digital wallets.'
  },
  {
    icon: <IconSupport />,
    q: 'Support Center',
    a: 'Find help with common issues, or contact support for further assistance.'
  },
  {
    icon: <IconDownload />,
    q: 'Download Data',
    a: 'Request a download of all your data we have stored, including account activity and user data.'
  }
]
