'use client'

import React from 'react'

import ToggleDemo from '@/components/docs/buttons/toggle-demo'
import ToggleIntentDemo from '@/components/docs/buttons/toggle-intent-demo'
import ToggleShapeDemo from '@/components/docs/buttons/toggle-shape-demo'
import ToggleSizeDemo from '@/components/docs/buttons/toggle-size-demo'

export default function Page() {
  return (
    <div className="p-16 max-w-xl">
      <ToggleDemo />
      <hr className="my-6" />
      <ToggleIntentDemo />
      <hr className="my-6" />
      <ToggleShapeDemo />
      <hr className="my-6" />
      <ToggleSizeDemo />
    </div>
  )
}
