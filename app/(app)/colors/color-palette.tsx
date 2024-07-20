'use client'

import * as React from 'react'

import { PickYourVibe } from '@/app/(app)/colors/customize'
import type { FormatOnlyForTailwindVariableType } from '@/lib/colors'
import {
  colors as primitiveColors,
  formatColorForTailwind,
  formatOnlyForTailwindVariable,
  formatOnlyForTailwindVariableValues
} from '@/lib/colors'
import { IconBrandTailwindcss, IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import type { ColorFormat } from '@react-types/color'
import { AnimatePresence, motion } from 'framer-motion'
import {
  GridList as GridListPrimitive,
  GridListItem as GridListItemPrimitive,
  Text,
  ToggleButton
} from 'react-aria-components'
import { toast } from 'sonner'
import { twJoin } from 'tailwind-merge'
import {
  buttonStyles,
  cn,
  ColorSwatch,
  Container,
  gridStyles,
  Header as HeaderPrimitive,
  Heading,
  isBrightColor,
  Label,
  Select,
  SelectItem,
  snippetVariants,
  Subheading,
  Toaster
} from 'ui'
import { copyToClipboard } from 'usemods'

const excludedColors = [
  'current',
  'transparent',
  'black',
  'white',
  'inherit',
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray'
]
const colors = Object.entries(primitiveColors).filter(([key]) => !excludedColors.includes(key))

export function ColorPalette() {
  return (
    <>
      <Toaster />
      <HeaderPrimitive className="bg-background pb-4 pt-12 lg:py-16 border-b ">
        <Container>
          <div className="flex flex-col sm:flex-row  justify-between sm:items-center gap-4">
            <div className="flex max-w-xl flex-col gap-y-2">
              <Heading level={1} className="text-2xl flex-1 sm:text-3xl font-bold tracking-tight">
                <span className="text-fg">Col</span>
                <span className="text-muted-fg">ors</span>
              </Heading>
              <Subheading className="font-normal sm:text-base text-muted-fg">
                A stash of colors blending Tailwind CSS vibes with HTML color names, served up in 6 slick formats.
              </Subheading>
            </div>

            <div className="flex gap-x-2 shrink-0">
              <PickYourVibe />
            </div>
          </div>
        </Container>
      </HeaderPrimitive>

      <Container>
        <div
          className={gridStyles({
            columns: { initial: 1, lg: 4 },
            gap: { initial: 2, sm: 4 },
            className: 'py-6 md:py-10 lg:py-16'
          })}
        >
          {colors.map(([key, value]) =>
            typeof value === 'object' ? <ColorName key={key} id={key} value={value} /> : null
          )}
        </div>
      </Container>
    </>
  )
}

export function ColorName({ id, value }: any) {
  const [isForTailwindVariable, setIsForTailwindVariable] = React.useState(false)
  const [selectedFormat, setSelectedFormat] = React.useState<ColorFormat>('hex')

  return (
    <div className="border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-x-1 justify-between bg-secondary/30 border-b p-2">
        <div className="capitalize text-sm font-medium">{id}</div>
        <div className="flex gap-x-1">
          <>
            <ToggleButton
              className={buttonStyles({ appearance: 'outline', size: 'square-petite', className: 'size-8' })}
              isSelected={isForTailwindVariable}
              isDisabled={
                !formatOnlyForTailwindVariableValues.includes(selectedFormat as FormatOnlyForTailwindVariableType)
              }
              onChange={setIsForTailwindVariable}
            >
              {({ isSelected }) => <IconBrandTailwindcss className={isSelected ? '!text-sky-500' : '!text-fg'} />}
            </ToggleButton>
            <Select
              selectedKey={selectedFormat}
              onSelectionChange={(v) => setSelectedFormat(v as ColorFormat)}
              placeholder={selectedFormat}
              className="[&_.btr]:min-w-24 [&_.btr]:h-8 flex-1"
              aria-label="Select Format"
              items={formatOnlyForTailwindVariable}
              placement="bottom right"
            >
              {(item) => (
                <SelectItem id={item.format}>
                  <Text slot="label">{item.format}</Text>
                </SelectItem>
              )}
            </Select>
          </>
        </div>
      </div>
      <GridListPrimitive aria-label={`${id} colors`} className="grid gap-2 p-2.5 overflow-hidden">
        {Object.entries(value as any)
          .map(([shade, value]) => ({ value, shade }))
          .map((item, i) => (
            <GridListItem
              isForTailwindVariable={isForTailwindVariable}
              selectedFormat={selectedFormat}
              key={i.toString()}
              textValue={item.shade}
              aria-label={`${id} of ${item.shade}`}
              id={id + '-' + Math.random()}
              item={item}
            />
          ))}
      </GridListPrimitive>
    </div>
  )
}

function GridListItem({ item, id, isForTailwindVariable, selectedFormat }: any) {
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
    <GridListItemPrimitive
      className={twJoin(
        'group w-full group text-muted-fg border-y border-transparent flex relative items-center justify-between font-mono text-xs',
        'focus:outline-none',
        'text-muted-fg hover:text-fg'
        // isBrightColor(item.value)
        //   ? 'text-zinc-900/80 hover:text-white focus:text-white'
        //   : 'text-white/80 hover:text-zinc-900 focus:text-zinc-900'
      )}
      onAction={() => handleCopy(parseColor(item.value as string).toString(selectedFormat ?? 'hsl'))}
    >
      <div className="line-clamp-1 w-48">
        {isForTailwindVariable ? (
          <span>
            {formatColorForTailwind(
              parseColor(item.value as string).toString(selectedFormat ?? 'hsl'),
              selectedFormat ?? 'hsl'
            )}
          </span>
        ) : (
          <span>{parseColor(item.value as string).toString(selectedFormat ?? 'hsl')}</span>
        )}
      </div>
      <div className={cn('flex justify-end relative gap-x-2 items-center')}>
        <div
          className={cn(
            'absolute right-2 group-hover:block hidden',
            isBrightColor(item.value) ? 'text-zinc-900/80' : 'text-white/80'
          )}
        >
          <span className="relative shrink-0">
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="checkmark"
                  variants={snippetVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <IconCheck />
                </motion.span>
              ) : (
                <motion.span key="copy" variants={snippetVariants} initial="hidden" animate="visible" exit="hidden">
                  <IconDuplicate />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>
        <Label className="shrink-0 text-[inherit]">{item.shade}</Label>

        <ColorSwatch colorName={`${id} of ${item.shade}`} color={item.value} />
      </div>
    </GridListItemPrimitive>
  )
}
