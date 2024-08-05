'use client'

import * as React from 'react'

import { ShowMore } from '@/components/ui/show-more'
import { cn } from '@/resources/lib/utils'
import { IconChevronLgDown } from '@irsyadadl/paranoid'

export default function ShowMoreDemo() {
  return (
    <div className="py-6">
      <ShowMore>
        {({ isSelected }) => (
          <>
            Show {isSelected ? 'less' : 'more'}
            <IconChevronLgDown
              className={cn(
                isSelected ? 'rotate-180' : '',
                'size-4 transition-transform duration-200'
              )}
            />
          </>
        )}
      </ShowMore>
    </div>
  )
}
