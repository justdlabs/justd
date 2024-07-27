'use client'

import React, { useState } from 'react'

import { generateColorScale, getColorName, textColorBasedOnBg } from '@/lib/colors'
import { wait } from '@/lib/utils'
import { IconArrowWallRight, IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { parseColor } from '@react-stately/color'
import { AnimatePresence, motion } from 'framer-motion'
import { ListBox, ListBoxItem, type ListBoxItemProps } from 'react-aria-components'
import {
  Button,
  ColorField,
  ColorSwatch,
  defaultColor,
  gridStyles,
  ModalContent,
  ModalOverlay,
  snippetVariants
} from 'ui'
import { copyToClipboard } from 'usemods'

export function ColorGenerator() {
  const [open, setOpen] = useState(false)
  const [colorObj, setColorObj] = useState<string>(defaultColor.toString('hex'))
  const [colorName, setColorName] = useState<string>('')
  const [isCopied, setIsCopied] = useState(false)
  const handleChange = (newColor: any) => {
    setColorObj(newColor.toString('hex'))
  }

  const colorScales = generateColorScale(colorObj)

  const handleOpen = () => {
    setColorName(getColorName(colorObj))
    setOpen(true)
  }

  const renderColorScaleAsCode = () => {
    const codeString = colorScales.map(({ shade, color }) => `'${shade}': '${color}'`).join(',\n  ')
    const formattedColorName = colorName.includes('-') ? `'${colorName}'` : colorName
    return `${formattedColorName}: {\n  ${codeString}\n}`
  }
  const handleCopy = () => {
    const codeString = renderColorScaleAsCode()
    copyToClipboard(codeString)
    setIsCopied(true)
    wait(1500).then((r) => setIsCopied(false))
    wait(2800).then((r) => setOpen(false))
  }

  return (
    <div className="mb-6">
      <ModalOverlay isOpen={open} onOpenChange={setOpen}>
        <ModalContent closeButton={false} size="2xl" className="p-0 [&>.dlc]:p-0">
          <div className="relative grid sm:grid-cols-2 divide-x">
            <div className="hidden sm:grid place-content-center font-mono text-sm relative">
              <ColorSwatch colorName={getColorName(colorObj, false)} color={colorObj} />
            </div>
            <div className="p-2">
              <div className="absolute top-2.5 right-2.5">
                <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
              </div>
              <pre>
                <code className="text-xs font-mono">{renderColorScaleAsCode()}</code>
              </pre>
            </div>
          </div>
        </ModalContent>
      </ModalOverlay>
      <div className="flex items-center gap-2 justify-between mb-6">
        <ColorField
          className="max-w-xs relative"
          value={parseColor(colorObj)}
          onChange={handleChange}
          placeholder={defaultColor.toString('hex')}
          suffix={
            <span className="text-xs absolute right-2.5 font-mono top-3">
              <IconArrowWallRight />
            </span>
          }
        />

        <Button onPress={handleOpen} intent="primary">
          Export
        </Button>
      </div>

      <ListBox
        orientation="horizontal"
        layout="grid"
        aria-label="Color shades"
        className={gridStyles({
          columns: {
            initial: 4,
            sm: 6,
            lg: 11
          },
          gap: 1.5
        })}
        items={colorScales}
      >
        {(item) => <ColorShades id={item.shade} item={item} />}
      </ListBox>
    </div>
  )
}

interface ColorShadesProps extends ListBoxItemProps {
  item: { shade: string | number; color: string }
}

const ColorShades = ({ item }: ColorShadesProps) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    copyToClipboard(item.color)
    setCopied(true)
    wait(1500).then((r) => setCopied(false))
  }
  return (
    <ListBoxItem
      className={`w-full cursor-pointer focus:outline-none relative group ring-1 overflow-hidden ring-black/10 dark:ring-white/10 ring-inset h-20 lg:h-28 rounded-lg flex flex-col gap-y-1 justify-end p-2 text-xs font-mono`}
      style={{ backgroundColor: item.color, color: textColorBasedOnBg(item.color) }}
      onAction={handleCopy}
      aria-label={`${item.shade} of ${item.color}`}
      textValue={item.color}
    >
      <span className="absolute z-20 top-2 opacity-80 left-2 size-full">
        {copied ? <IconCheck /> : <IconDuplicate className="size-4 animate-in group-hover:block hidden" />}
      </span>
      <span className="relative group-focus-visible:font-bold z-20">{item.shade}</span>
      <span className="relative group-focus-visible:font-bold z-20">{item.color}</span>
      <div className="inset-0 z-10 absolute size-full group-focus-visible:block hidden bg-white/10" />
    </ListBoxItem>
  )
}

function CopyButton({ isCopied, handleCopy }: any) {
  return (
    <Button
      onPress={handleCopy}
      className="size-7 rounded-sm backdrop-blur-lg"
      aria-label="Copy json color scale"
      size="square-petite"
      appearance="outline"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="checkmark-import"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IconCheck />
          </motion.span>
        ) : (
          <motion.span key="copy-import" variants={snippetVariants} initial="hidden" animate="visible" exit="hidden">
            <IconDuplicate />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
