import * as React from 'react'

import { CopyJsonColorShades } from '@/app/(app)/colors/(colors)/copy-json-color-shades'
import { allFormats, formatOnlyForTailwindVariableValues } from '@/lib/colors'
import type { ColorItemProps, FormatOnlyForTailwindVariableType } from '@/types'
import { IconBrandTailwindcss } from '@irsyadadl/paranoid'
import type { ColorFormat } from '@react-types/color'
import { ListBox, Text, ToggleButton } from 'react-aria-components'
import { toast } from 'sonner'
import { buttonStyles, gridStyles, Heading, Select, SelectItem, Tooltip, TooltipContent } from 'ui'

import { ColorItem } from './color-item'

interface ColorRowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  item: ColorItemProps
  children?: React.ReactNode
  swatchClassName?: string
  showItem?: boolean
}

export function ColorRow({ showItem = false, swatchClassName, item }: ColorRowProps) {
  const [isForTailwindVariable, setIsForTailwindVariable] = React.useState(false)
  const [selectedFormat, setSelectedFormat] = React.useState<
    ColorFormat | null | FormatOnlyForTailwindVariableType
  >('hex')
  return (
    <div className="p-2 bg-tertiary border rounded-lg overflow-hidden">
      <div className="flex mb-2 items-center gap-x-1 justify-between">
        <Heading
          level={3}
          className="tracking-tight text-muted-fg font-mono text-sm font-medium sm:text-sm"
        >
          {item.name}
        </Heading>
        <div className="flex gap-x-1">
          <>
            <CopyJsonColorShades
              name={item.name}
              color={item.children[4].color}
              colorScales={item.children}
            />
            <Tooltip>
              <ToggleButton
                className={buttonStyles({
                  appearance: 'outline',
                  size: 'square-petite',
                  className: 'size-8'
                })}
                isSelected={isForTailwindVariable}
                onChange={() => {
                  if (
                    !formatOnlyForTailwindVariableValues.includes(
                      selectedFormat as FormatOnlyForTailwindVariableType
                    )
                  ) {
                    toast(
                      'You can only switch up the color format to RGB, RGBA, HSL, HSLA, HSB, or HSBA.'
                    )
                    return
                  }
                  setIsForTailwindVariable(!isForTailwindVariable)
                }}
              >
                {({ isSelected }) => (
                  <IconBrandTailwindcss className={isSelected ? '!text-sky-500' : '!text-fg'} />
                )}
              </ToggleButton>
              <TooltipContent className="max-w-xs">
                You can switch up the color format to RGB, RGBA, HSL, HSLA, HSB, or HSBA.
              </TooltipContent>
            </Tooltip>
            <Select
              selectedKey={selectedFormat}
              onSelectionChange={(v) => {
                setSelectedFormat(v as ColorFormat)
              }}
              className="[&_.btr]:min-w-24 [&_.btr]:h-8 flex-1"
              aria-label="Select Format"
              placeholder="hex"
              items={allFormats}
              placement="bottom right"
            >
              {(item) => (
                <SelectItem textValue={item.format} id={item.format}>
                  <Text slot="label">{item.format}</Text>
                </SelectItem>
              )}
            </Select>
          </>
        </div>
      </div>

      <ListBox
        layout="grid"
        orientation="horizontal"
        className={gridStyles({
          columns: { initial: 7, lg: 11 },
          gapX: { initial: 1, sm: 1 },
          gapY: { initial: 2, sm: 1 }
        })}
        aria-label={`${item.name} 50-950 colors`}
        items={item.children}
      >
        {item.children.map((color, i) => (
          <ColorItem
            key={i}
            {...{
              showItem,
              swatchClassName,
              isForTailwindVariable,
              selectedFormat: selectedFormat ?? 'hsl',
              item: color,
              name: item.name
            }}
          />
        ))}
      </ListBox>
    </div>
  )
}
