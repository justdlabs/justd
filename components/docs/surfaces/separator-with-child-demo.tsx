'use client'

import * as React from 'react'

import { IconChevronDown } from '@irsyadadl/paranoid'
import { Button, Separator } from 'ui'

export default function SeparatorWithChildDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="space-y-16 py-6">
      <Separator orientation="vertical" className="h-56">
        Or
      </Separator>
      <Separator>Or continue with</Separator>
      <Separator>
        <Button onPress={() => setIsOpen(!isOpen)} appearance="outline" size="extra-small" shape="circle">
          Show more <IconChevronDown className={`${isOpen ? 'rotate-180' : ''} size-4 transition-transform duration-200`} />
        </Button>
      </Separator>
    </div>
  )
}
