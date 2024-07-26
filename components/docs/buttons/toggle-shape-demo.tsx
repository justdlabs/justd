'use client'

import { Toggle } from 'ui'

export default function ToggleShapeDemo() {
  return (
    <Toggle appearance="outline" shape="circle">
      {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
    </Toggle>
  )
}
