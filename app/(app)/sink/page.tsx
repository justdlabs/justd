'use client'

import React from 'react'

import ToolbarDemo from '@/components/docs/controls/toolbar-demo'
import { Card } from 'ui'

export default function Page() {
  return (
    <div className="p-16">
      <Card className="p-4">
        <ToolbarDemo />
      </Card>
    </div>
  )
}
