'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

import _colors from '@/app/(app)/colors/colors.json'
import { PickYourVibe } from '@/app/(app)/colors/pick-your-vibe'
import {
  allFormats,
  formatColorForTailwind,
  type FormatOnlyForTailwindVariableType,
  formatOnlyForTailwindVariableValues
} from '@/lib/colors'
import type { ColorItem, ColorShade } from '@/types'
import { IconBrandTailwindcss, IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import type { ColorFormat } from '@react-types/color'
import { AnimatePresence, motion } from 'framer-motion'
import type { GridListItemProps } from 'react-aria-components'
import { GridListItem, Text, ToggleButton } from 'react-aria-components'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'
import {
  buttonStyles,
  cn,
  ColorSwatch,
  Container,
  Grid,
  gridStyles,
  Header as HeaderPrimitive,
  Heading,
  isBrightColor,
  LoadingDots,
  Select,
  SelectItem,
  snippetVariants,
  Tooltip,
  TooltipContent
} from 'ui'
import { copyToClipboard } from 'usemods'

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
      <HeaderPrimitive className="bg-background pb-4 pt-12 lg:py-16 border-b ">
        <Container>
          <div className="flex justify-between items-center">
            <Heading level={1} className="text-2xl sm:text-3xl font-bold tracking-tight">
              Col
              <span className="text-muted-fg">ors</span>
            </Heading>
            <PickYourVibe />
          </div>
        </Container>
      </HeaderPrimitive>
      <Container className="max-w-screen-2xl py-6 lg:py-10">
        <div
          className={gridStyles({
            columns: { initial: 1, sm: 2, lg: 3 },
            gap: { initial: 2, sm: 4 }
          })}
        >
          {colors.map((color, i) => (
            <ColorRow key={i} item={color as ColorItem} />
          ))}
        </div>

        {hasMore && (
          <div ref={ref} className="col-span-3 text-center">
            <LoadingDots className="bg-fg/50" />
          </div>
        )}
      </Container>
    </>
  )
}

interface ColorPaletteProps {
  item: ColorItem
}

export function ColorRow({ item }: ColorPaletteProps) {
  const [isForTailwindVariable, setIsForTailwindVariable] = React.useState(false)
  const [selectedFormat, setSelectedFormat] = React.useState<ColorFormat | null | FormatOnlyForTailwindVariableType>(
    'hex'
  )
  return (
    <>
      <div className="border p-3 rounded-xl overflow-hidden">
        <div className="flex mb-2 items-center gap-x-1 justify-between">
          <Heading level={3} className="capitalize text-sm font-medium sm:text-sm">
            {item.name}
          </Heading>
          <div className="flex gap-x-1">
            <>
              <Tooltip>
                <ToggleButton
                  className={buttonStyles({ appearance: 'outline', size: 'square-petite', className: 'size-8' })}
                  isSelected={isForTailwindVariable}
                  onChange={() => {
                    if (
                      !formatOnlyForTailwindVariableValues.includes(selectedFormat as FormatOnlyForTailwindVariableType)
                    ) {
                      toast('You can only switch up the color format to RGB, RGBA, HSL, HSLA, HSB, or HSBA.')
                      return
                    }
                    setIsForTailwindVariable(!isForTailwindVariable)
                  }}
                >
                  {({ isSelected }) => <IconBrandTailwindcss className={isSelected ? '!text-sky-500' : '!text-fg'} />}
                </ToggleButton>
                <TooltipContent className="max-w-xs">
                  You can switch up the color format to RGB, RGBA, HSL, HSLA, HSB, or HSBA.
                </TooltipContent>
              </Tooltip>
              <Select
                selectedKey={selectedFormat}
                onSelectionChange={(v) => setSelectedFormat(v as ColorFormat)}
                className="[&_.btr]:min-w-24 [&_.btr]:h-8 flex-1"
                aria-label="Select Format"
                placeholder="hex"
                items={allFormats}
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
        <Grid
          columns={{ initial: 7, lg: 11 }}
          gapY={{ initial: 3, sm: 1 }}
          gapX={{ initial: 1, sm: 1 }}
          aria-label={`${item.name} 50-950 colors`}
          items={item.children}
        >
          {(color) => (
            <ColorItem
              id={Math.random().toString()}
              {...{
                isForTailwindVariable,
                selectedFormat: selectedFormat ?? 'hsl',
                item: color,
                name: item.name
              }}
            />
          )}
        </Grid>
      </div>
    </>
  )
}

interface ColorItemProps extends GridListItemProps {
  item: ColorShade
  name: string
  isForTailwindVariable: boolean
  selectedFormat: FormatOnlyForTailwindVariableType | ColorFormat
}

const ColorItem = ({ item, name, isForTailwindVariable, selectedFormat }: ColorItemProps) => {
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
    <GridListItem
      aria-label={`${name} of ${item.shade}`}
      className={cn(
        'group w-full focus:outline-none focus-visible:outline-primary-600 rounded focus-visible:outline-none size-9 sm:w-9 lg:w-8 lg:h-16',
        isBrightColor(item.color) ? 'text-black' : 'text-white'
      )}
      onAction={() => handleCopy(parseColor(item.color as string)?.toString(selectedFormat))}
    >
      <div className="relative">
        <ColorSwatch
          aria-label={`${name} of ${item.shade}`}
          colorName={`${name} of ${item.shade}`}
          color={item.color}
          className="relative size-9 sm:w-9 lg:w-8 lg:h-16"
        />
        <div className="absolute top-2.5 left-2.5 lg:top-1.5 lg:left-2 group-hover:block group-focus:block hidden group-pressed:block">
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
        </div>
      </div>
    </GridListItem>
  )
}
