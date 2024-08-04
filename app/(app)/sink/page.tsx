'use client'

import React from 'react'

import PopoverArrowDemo from '@/components/docs/overlays/popover-arrow-demo'
import PopoverControlledDemo from '@/components/docs/overlays/popover-controlled-demo'
import PopoverCustomClose from '@/components/docs/overlays/popover-custom-close'
import PopoverDemo from '@/components/docs/overlays/popover-demo'
import PopoverTriggerDemo from '@/components/docs/overlays/popover-trigger-demo'

export default function Page() {
  return (
    <div>
      <PopoverDemo />
      <PopoverControlledDemo />
      <PopoverCustomClose />
      <PopoverTriggerDemo />
      <PopoverArrowDemo />
    </div>
  )
}
