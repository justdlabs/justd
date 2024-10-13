'use client'

import { CardBlock } from '@/components/blocks'
import { Button } from 'ui'

export function Buttons() {
  return (
    <CardBlock>
      <div className="flex gap-4">
        <Button appearance="plain">Label</Button>
        <Button appearance="outline">Label</Button>
        <Button intent="secondary">Label</Button>
      </div>
    </CardBlock>
  )
}
