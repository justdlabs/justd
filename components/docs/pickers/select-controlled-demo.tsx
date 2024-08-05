'use client'

import React from 'react'

import type { Key } from 'react-aria-components'
import { Description, Select, SelectItem } from 'ui'

export const movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Dark Knight' },
  { id: 3, title: 'Interstellar' },
  { id: 4, title: 'The Matrix' },
  { id: 5, title: 'Pulp Fiction' }
]

export default function SelectControlledDemo() {
  const [movie, setMovie] = React.useState<Key>('')
  return (
    <>
      <Select selectedKey={movie} onSelectionChange={setMovie} label="Movies" placeholder="Select a movie" items={movies}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.title}>
            {item.title}
          </SelectItem>
        )}
      </Select>
      <Description className="mt-2 block [&>strong]:text-fg text-muted-fg">
        You have selected: <strong>{movie}</strong>
      </Description>
    </>
  )
}
