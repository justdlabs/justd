import React from 'react'

import { Search } from '@/app/(app)/icons/partials/controller/search'
import { SelectSize } from '@/app/(app)/icons/partials/controller/select-size'
import { Install } from '@/app/(app)/icons/partials/install'
import type { Key } from 'react-aria-components'

interface Props {
  value: string
  setValue: (value: string) => void
  selectedSize: Key
  setSelectedSize: (selectedSize: Key) => void
}

export function Controller({ value, setValue, selectedSize, setSelectedSize }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-12">
      <Install />
      <div className="flex gap-2 items-center">
        <Search value={value} onChange={setValue} />
        <SelectSize selectedKey={selectedSize} onSelectionChange={setSelectedSize} />
      </div>
    </div>
  )
}
