'use client'

import { ToggleButton } from 'ui'

export default function ToggleButtonDemo() {
  return (
    <ToggleButton>{({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}</ToggleButton>
  )
}
