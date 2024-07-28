import * as React from 'react'

import { formatColorForTailwind, textColorBasedOnBg } from '@/lib/colors'
import type { ColorShade, FormatOnlyForTailwindVariableType } from '@/types'
import { IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import type { ColorFormat } from '@react-types/color'
import type { ListBoxItemProps } from 'react-aria-components'
import { ListBoxItem } from 'react-aria-components'
import { toast } from 'sonner'
import { cn, ColorSwatch, Tooltip, TooltipContent, TooltipTrigger } from 'ui'
import { copyToClipboard } from 'usemods'

interface ColorItemProps extends ListBoxItemProps {
  item: ColorShade
  name: string
  isForTailwindVariable: boolean
  selectedFormat: FormatOnlyForTailwindVariableType | ColorFormat
  swatchClassName?: string
  showItem?: boolean
}

const ColorItem = ({
  showItem,
  swatchClassName,
  item,
  name,
  isForTailwindVariable,
  selectedFormat
}: ColorItemProps) => {
  const [copied, setCopied] = React.useState(false)
  const handleCopy = async (selectedColor: string) => {
    const toCopy = isForTailwindVariable
      ? formatColorForTailwind(selectedColor, selectedFormat as FormatOnlyForTailwindVariableType)
      : selectedColor
    await copyToClipboard(toCopy)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
    toast('Copied to clipboard!')
  }
  return (
    <ListBoxItem
      textValue={name}
      className={cn(
        'group w-full focus:outline-none cursor-pointer focus-visible:outline-primary-600 focus-visible:outline-2 focus-visible:outline-offset-1 rounded-md relative'
      )}
      onAction={() => handleCopy(parseColor(item.color as string)?.toString(selectedFormat))}
      style={{
        color: textColorBasedOnBg(item.color)
      }}
    >
      <ColorSwatch
        aria-label={`${name} of ${item.shade}`}
        colorName={name}
        color={item.color}
        className={cn('size-10 sm:w-full lg:size-8', swatchClassName)}
      />
      <div className="absolute lg:left-1/2 lg:-translate-x-1/2 group-hover:block group-focus:block hidden group-pressed:block lg:top-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {copied ? <IconCheck /> : <IconDuplicate />}
      </div>

      {showItem && (
        <div className="absolute bottom-0 block line-clamp-1 p-1 text-[0.70rem] font-mono">
          <span className="w-fit mb-1">{item.shade}</span>
          <Tooltip>
            <TooltipTrigger className="w-full text-left focus:outline-none">
              {isForTailwindVariable && selectedFormat !== 'hexa' && selectedFormat !== 'hex' && 'tw/'}
              {selectedFormat === 'hex' ? parseColor(item.color as string)?.toString(selectedFormat) : selectedFormat}
            </TooltipTrigger>
            <TooltipContent>{parseColor(item.color as string)?.toString(selectedFormat)}</TooltipContent>
          </Tooltip>
        </div>
      )}
    </ListBoxItem>
  )
}

export { ColorItem }
