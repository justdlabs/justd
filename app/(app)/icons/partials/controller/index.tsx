import React from 'react'

import type { Key } from 'react-aria-components'

import { Install } from './install'
import { Search } from './search'
import { SelectSize } from './select-size'

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
