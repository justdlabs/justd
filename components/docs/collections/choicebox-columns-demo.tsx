'use client'

import React from 'react'

import { Choicebox, ChoiceboxItem } from 'ui'

export default function ChoiceboxColumnsDemo() {
  return (
    <Choicebox
      aria-label="Select prices"
      gap={2}
      columns={3}
      selectionMode="multiple"
      items={prices}
    >
      {(item) => <ChoiceboxItem {...item} />}
    </Choicebox>
  )
}

const prices = [
  { id: 1, title: 'Basic', description: 'Essentials, get started' },
  { id: 2, title: 'Standard', description: 'More features, support' },
  { id: 3, title: 'Premium', description: 'Advanced, growing needs' },
  { id: 4, title: 'Deluxe', description: 'Top-tier, maximum performance' },
  { id: 5, title: 'Ultimate', description: 'All-inclusive, every feature' },
  { id: 6, title: 'Enterprise', description: 'Custom, large-scale operations' }
]
