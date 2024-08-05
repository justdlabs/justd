'use client'

import * as React from 'react'

import { ShowMore } from '@/components/ui/show-more'
import { IconChevronLgDown } from '@irsyadadl/paranoid'

export default function ShowMoreControlledDemo() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <div className="py-6">
      <ShowMore onChange={setIsExpanded} isSelected={isExpanded}>
        {isExpanded ? 'Expand' : 'Collapse'}
        <IconChevronLgDown
          className={`${isExpanded ? 'rotate-180' : ''} size-4 transition-transform duration-200`}
        />
      </ShowMore>
    </div>
  )
}
