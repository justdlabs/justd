'use client'

import { Toggle } from 'ui'

export default function ToggleShapeDemo() {
  return (
    <Toggle intent="outline" shape="circle">
      {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
    </Toggle>
  )
}
