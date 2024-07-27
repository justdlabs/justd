'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

import { ColorGenerator } from '@/app/(app)/colors/(colors)/color-generator'
import _colors from '@/app/(app)/colors/(colors)/colors.json'
import type { ColorItemProps } from '@/types'
import { IconLoader } from '@irsyadadl/paranoid'
import { useInView } from 'react-intersection-observer'
import { Container, gridStyles } from 'ui'

import { ColorRow } from './color-row'

const filteredColors = _colors.map(([name, colorShades]) => ({
  name,
  children: Object.entries(colorShades).map(([shade, color]) => ({
    shade: shade,
    color
  }))
}))

export function ColorPalette() {
  const [colors, setColors] = useState(() => filteredColors.slice(0, 12))
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView && hasMore) {
      const nextPage = colors.length + 6
      const newColors = filteredColors.slice(0, nextPage)
      setColors(newColors)
      if (newColors.length >= filteredColors.length) {
        setHasMore(false)
      }
    }
  }, [inView])

  return (
    <>
      <Container className="py-6 lg:py-10">
        <ColorGenerator />
        <div
          className={gridStyles({
            columns: { initial: 1, sm: 2, lg: 3 },
            gap: { initial: 2 }
          })}
        >
          {colors.map((color, i) => (
            <ColorRow key={i} item={color as ColorItemProps} />
          ))}
        </div>

        {hasMore && (
          <div ref={ref} className="col-span-3 mt-8 text-center">
            <IconLoader className="size-6 animate-spin mx-auto" />
          </div>
        )}
      </Container>
    </>
  )
}
