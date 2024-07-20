import React, { useState } from 'react'

import type { FormatOnlyForTailwindVariableType } from '@/lib/colors'
import { formatColorForTailwind, formatOnlyForTailwindVariable } from '@/lib/colors'
import { IconBrandTailwindcss, IconColors, IconRefresh } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import type { ColorFormat } from '@react-types/color'
import { type Color } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import {
  Button,
  ColorField,
  ColorPicker,
  defaultColor,
  Popover,
  PopoverContent,
  Select,
  SelectItem,
  Snippet,
  useMediaQuery
} from 'ui'

const sc =
  'text-fg [&_.bx]:text-fg [&_.bx]:bg-background [&_[.bx[data-slot=icon]]:text-fg [&_.bx]:border-border bg-secondary/50 py-2'
const PickYourVibe = () => {
  const [color, setColor] = useState<Color>(parseColor('hsl(216, 98%, 52%)'))
  const [tailwindFormat, setTailwindFormat] = useState(false)

  const rgbFormatted = tailwindFormat ? formatColorForTailwind(color.toString('rgb'), 'rgb') : color.toString('rgb')
  const hslFormatted = tailwindFormat ? formatColorForTailwind(color.toString('hsl'), 'hsl') : color.toString('hsl')
  const hsbFormatted = tailwindFormat ? formatColorForTailwind(color.toString('hsl'), 'hsb') : color.toString('hsb')
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Popover aria-label="Choose your vibe color">
      <Button appearance="outline">
        <IconColors />
        Pick Your Vibe
      </Button>
      <PopoverContent className="min-w-80" placement="bottom end">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-1 justify-between">
            {isMobile ? (
              <ColorField
                enableColorPicker={false}
                value={color}
                onChange={(newColor: Color | null) => newColor && setColor(newColor)}
                suffix={<IconRefresh aria-label="Refresh color" />}
              />
            ) : (
              <ColorPicker
                className="hidden lg:block"
                placeholder={color.toString('hex') ?? defaultColor}
                value={color}
                onChange={setColor}
              />
            )}
            <Button
              aria-label="Convert to Tailwind variable format"
              onPress={() => setTailwindFormat(!tailwindFormat)}
              appearance="outline"
              className={twJoin('size-10', tailwindFormat && '[&>[data-slot=icon]]:text-sky-500')}
              size="square-petite"
            >
              <IconBrandTailwindcss />
            </Button>
          </div>
          <Snippet className={sc} text={rgbFormatted} />
          <Snippet className={sc} text={hslFormatted} />
          <Snippet className={sc} text={hsbFormatted} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

interface TrickOutProps {
  selectedKey: FormatOnlyForTailwindVariableType
  onSelectionChange: (v: ColorFormat | FormatOnlyForTailwindVariableType) => void
}

const TrickOut = (props: TrickOutProps) => {
  return (
    <>
      <Select
        selectedKey={props.selectedKey}
        onSelectionChange={(v) => props.onSelectionChange(v as ColorFormat | FormatOnlyForTailwindVariableType)}
        placeholder="Select Format"
        className="[&_.btr]:min-w-40"
        aria-label="Select Format"
        items={formatOnlyForTailwindVariable}
      >
        {(item) => (
          <SelectItem id={item.format} textValue={item.format}>
            {item.format}
          </SelectItem>
        )}
      </Select>
    </>
  )
}

export { PickYourVibe, TrickOut }
