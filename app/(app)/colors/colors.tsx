'use client'

import * as React from 'react'

import { PickYourVibe } from '@/app/(app)/colors/customize'
import {
  colors as primitiveColors,
  formatColorForTailwind,
  formatOnlyForTailwindVariable,
  FormatOnlyForTailwindVariableType,
  formatOnlyForTailwindVariableValues
} from '@/lib/colors'
import { IconBrandTailwindcss, IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import type { ColorFormat } from '@react-types/color'
import { AnimatePresence, motion } from 'framer-motion'
import {
  GridList as GridListPrimitive,
  GridListItem as GridListItemPrimitive,
  Header,
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

export function Colors() {
  return (
    <>
      <Toaster />
      <HeaderPrimitive className="bg-background pb-4 pt-12 lg:py-16 border-b ">
        <Container>
          <div className="flex flex-col sm:flex-row  justify-between sm:items-center gap-4">
            <Heading level={1} className="text-2xl flex-1 sm:text-3xl font-bold tracking-tight">
              Colors
            </Heading>

            <div className="flex gap-x-2 shrink-0">
              <PickYourVibe />
              {/*<TrickOut*/}
              {/*  selectedKey={selectedFormat?.toString() as FormatOnlyForTailwindVariableType}*/}
              {/*  onSelectionChange={setSelectedFormat}*/}
              {/*/>*/}
              {/*{formatOnlyForTailwindVariableValues.includes(selectedFormat as FormatOnlyForTailwindVariableType) && (*/}
              {/*  <ToggleButton*/}
              {/*    aria-label="Toggle Tailwind Variable"*/}
              {/*    isSelected={isForTailwindVariable}*/}
              {/*    onChange={setIsForTailwindVariable}*/}
              {/*  >*/}
              {/*    {({ isSelected }) => <IconBrandTailwindcss className={isSelected ? '!text-sky-500' : ''} />}*/}
              {/*  </ToggleButton>*/}
              {/*)}*/}
            </div>
          </div>
        </Container>
      </HeaderPrimitive>
      <Container>
        <div
          className={gridStyles({
            columns: { initial: 2, sm: 4, lg: 6 },
            gapX: { initial: 2, sm: 4 },
            className: 'gap-y-12 py-6 md:py-10 lg:py-16'
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
    <div className="flex flex-col gap-2">
      <Header className="flex w-full uppercase text-xs items-center gap-x-1 justify-between">
        <div>
          <span>{id}</span>
          <span className="mx-2">/</span>
          {<span>{selectedFormat}</span>}
        </div>
        {formatOnlyForTailwindVariableValues.includes(selectedFormat as FormatOnlyForTailwindVariableType) && (
          <ToggleButton
            className={buttonStyles({ appearance: 'outline', size: 'square-petite', className: 'size-7' })}
            isSelected={isForTailwindVariable}
            onChange={setIsForTailwindVariable}
          >
            {({ isSelected }) => <IconBrandTailwindcss className={isSelected ? '!text-sky-500' : ''} />}
          </ToggleButton>
        )}
      </Header>
      <div className="flex items-center gap-x-1">
        <Select
          selectedKey={selectedFormat}
          onSelectionChange={(v) => setSelectedFormat(v as ColorFormat)}
          placeholder="Select Format"
          className="[&_.btr]:min-w-40 flex-1"
          aria-label="Select Format"
          items={formatOnlyForTailwindVariable}
        >
          {(item) => (
            <SelectItem id={item.format} textValue={item.format}>
              {item.format}
            </SelectItem>
          )}
        </Select>
      </div>
      <GridListPrimitive
        aria-label={`${id} colors`}
        className="border rounded-lg flex flex-col gap-y-0.5 p-1 overflow-hidden"
      >
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

  console.log(copied)
  return (
    <GridListItemPrimitive
      className={twJoin(
        'group w-full group text-muted-fg border-y border-transparent px-2 flex relative justify-between font-mono text-xs',
        'focus:outline-none',
        isBrightColor(item.value)
          ? 'text-zinc-900/80 hover:text-white focus:text-white'
          : 'text-white/80 hover:text-zinc-900 focus:text-zinc-900'
      )}
      onAction={() => handleCopy(parseColor(item.value as string).toString(selectedFormat ?? 'hsl'))}
    >
      <div
        className={cn(
          'absolute top-4 left-4',
          isBrightColor(item.value) ? 'text-zinc-900/80' : 'text-white/80',
          'group-hover:block hidden'
        )}
      >
        <span className="relative shrink-0">
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span key="checkmark" variants={snippetVariants} initial="hidden" animate="visible" exit="hidden">
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
      <ColorSwatch
        className="w-full shrink h-12"
        colorName={`${id} of ${item.shade}`}
        color={parseColor(item.value as string)}
      />
      <Label className="shrink-0 w-12 absolute right-4 h-12 grid place-content-center text-[inherit]">
        {item.shade}
      </Label>
    </GridListItemPrimitive>
  )
}
