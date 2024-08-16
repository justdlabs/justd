import * as React from 'react'

import { CopyJsonColorShades } from '@/app/(app)/colors/(colors)/copy-json-color-shades'
import {
  allFormats,
  formatOnlyForTailwindVariableValues,
  getColorName,
  tailwindColorNames
} from '@/resources/lib/colors'
import type { ColorFormat } from '@react-types/color'
import { IconBrandTailwindcss } from 'justd-icons'
import { ListBox, Text, ToggleButton } from 'react-aria-components'
import type { ColorItemProps, FormatOnlyForTailwindVariableType } from 'resources/types'
import { toast } from 'sonner'
import { buttonStyles, gridStyles, Select, Tooltip } from 'ui'

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
        <h3 className="tracking-tight text-muted-fg font-mono text-sm font-medium sm:text-sm">
          {tailwindColorNames.includes(item.name)
            ? item.name
            : getColorName(item.children[4].color)}
        </h3>
        <div className="flex gap-x-1">
          <>
            <CopyJsonColorShades
              name={item.name}
              color={item.children[4].color}
              colorScales={item.children}
            />
            {['rgb', 'rgba', 'hsl', 'hsla', 'hsb', 'hsba'].includes(
              selectedFormat as ColorFormat
            ) && (
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
                <Tooltip.Content className="max-w-xs">
                  You can switch up the color format to RGB, RGBA, HSL, HSLA, HSB, or HSBA.
                </Tooltip.Content>
              </Tooltip>
            )}
            <Select
              selectedKey={selectedFormat}
              onSelectionChange={(v) => {
                setSelectedFormat(v as ColorFormat)
              }}
              className="[&_.btr]:min-w-24 [&_.btr]:h-8 flex-1"
              aria-label="Select Format"
              placeholder="hex"
            >
              <Select.Trigger />
              <Select.List placement="bottom right" items={allFormats}>
                {(item) => (
                  <Select.Option textValue={item.format} id={item.format}>
                    <Text slot="label">{item.format}</Text>
                  </Select.Option>
                )}
              </Select.List>
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
