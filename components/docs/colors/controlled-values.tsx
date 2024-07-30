import React from 'react'

import type { ColorFormat } from '@react-types/color'
import { Card, ColorSwatch } from 'ui'

const formats: string[] = ['hex', 'hexa', 'rgb', 'rgba', 'hsl', 'hsla', 'hsb', 'hsba']
export function ControlledValues({ color }: { color: any }) {
  return (
    <Card className="p-3 min-w-[15.5rem] sm:min-w-72 text-center bg-transparent flex flex-col gap-y-2 [&>span]:flex [&>span]:gap-x-6 [&>span]:justify-between">
      {formats.map((format) => (
        <span key={format}>
          <span className="flex gap-x-1.5 items-center">
            <ColorSwatch
              className="size-4 rounded"
              color={color.toString(format as ColorFormat | 'css' | undefined)}
            />
            <span className="uppercase text-xs">{format}</span>
          </span>
          <span className="text-xs sm:text-sm">
            {color.toString(format as ColorFormat | 'css' | undefined)}
          </span>
        </span>
      ))}
    </Card>
  )
}
