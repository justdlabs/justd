import React, { useState } from 'react'

import { getColorName } from '@/lib/colors'
import { wait } from '@/lib/utils'
import { IconBrackets2, IconCheck, IconDuplicate } from '@irsyadadl/paranoid'
import { Heading } from 'react-aria-components'
import { Button, ColorSwatch, Modal, ModalContent, ModalOverlay } from 'ui'
import { copyToClipboard } from 'usemods'

export function CopyJsonColorShades({ colorScales, name, color }: { name: string; color: string; colorScales: any }) {
  const [open, setOpen] = useState(false)
  const [colorName, setColorName] = useState<string>(name || 'unknown')
  const [isCopied, setIsCopied] = useState(false)

  const handleOpen = () => {
    setColorName(getColorName(color))
    setOpen(true)
  }

  const codeString = colorScales.map(({ shade, color }: any) => `'${shade}': '${color}'`).join(',\n  ')
  const renderColorScaleAsCode = (colorScales: any, colorName: string) => {
    const formattedColorName = colorName.includes('-') ? `'${colorName}'` : colorName
    return `${formattedColorName}: {\n  ${codeString}\n}`
  }

  const handleCopy = () => {
    const codeString = renderColorScaleAsCode(colorScales, colorName)
    copyToClipboard(codeString)
    setIsCopied(true)
    wait(1500).then((r) => setIsCopied(false))
    wait(2800).then((r) => setOpen(false))
  }

  return (
    <Modal onOpenChange={setOpen} isOpen={open}>
      <Button className="size-8" size="square-petite" appearance="outline" onPress={handleOpen}>
        <IconBrackets2 />
      </Button>
      <ModalOverlay>
        <ModalContent closeButton={false} size="2xl" className="p-0 [&>.dlc]:p-0">
          <Heading className="sr-only">{name}</Heading>
          <div className="relative grid sm:grid-cols-2 divide-x">
            <div className="hidden sm:grid place-content-center font-mono text-sm relative">
              <ColorSwatch colorName={getColorName(color, false)} color={color} />
            </div>
            <div className="p-2">
              <div className="absolute top-2.5 right-2.5">
                <Button
                  onPress={handleCopy}
                  className="size-7 rounded-sm backdrop-blur-lg"
                  aria-label="Copy json color scale"
                  size="square-petite"
                  appearance="outline"
                >
                  {isCopied ? <IconCheck /> : <IconDuplicate />}
                </Button>
              </div>
              <pre>
                <code className="text-xs font-mono">{renderColorScaleAsCode(colorScales, name)}</code>
              </pre>
            </div>
          </div>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
