'use client'

import { Toggle } from 'ui'

export default function ToggleIntentDemo() {
  return (
    <div className="flex gap-2">
      <Toggle>{({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}</Toggle>
      <Toggle intent="outline">{({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}</Toggle>
      <Toggle intent="light/primary">{({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}</Toggle>
    </div>
  )
}
