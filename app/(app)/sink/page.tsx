'use client'

import React from 'react'

import ComboBoxDemo from '@/components/docs/pickers/combo-box-demo'
import SelectDemo from '@/components/docs/pickers/select-demo'
import SelectSectionDemo from '@/components/docs/pickers/select-section-demo'
import { FileTrigger } from 'ui'

export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <FileTrigger />
      <SelectSectionDemo />
      <ComboBoxDemo />
    </div>
  )
}
