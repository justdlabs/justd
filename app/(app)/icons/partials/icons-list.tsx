'use client'

import React, { Suspense, useRef } from 'react'

import * as icons from 'justd-icons'
import { IconDownload } from 'justd-icons'
import { useSearchParams } from 'next/navigation'
import { ListBox, ListBoxItem } from 'react-aria-components'
import * as ReactDOMServer from 'react-dom/server'
import { toast } from 'sonner'
import { Loader, Menu, MenuContent, MenuItem, MenuSeparator } from 'ui'
import { copyToClipboard } from 'usemods'

import { Controller } from './controller'
import { box, item } from './styles'

export interface SearchParamsProps {
  searchParams: {
    query: string
    t: 'solid' | 'regular'
  }
}

export function IconsList({ searchParams }: SearchParamsProps) {
  const { query, t } = searchParams
  const filterType = t ?? 'regular'

  const filteredIcons = Object.entries(icons).filter(([name]) => {
    const matchesSearch = query ? name.toLowerCase().includes(query.toLowerCase()) : true
    const isSolid = name.toLowerCase().endsWith('fill')
    const matchesFilter =
      (filterType === 'solid' && isSolid) || (filterType === 'regular' && !isSolid)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      <Controller searchParams={searchParams} />

      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-96">
            <Loader />
          </div>
        }
      >
        <div className="sm:-mx-2">
          <ListBox selectionMode="single" aria-label="List Icon" layout="grid" className={box()}>
            {filteredIcons.map(([name, Icon]) => (
              <IconListItem key={name} name={name} Icon={Icon} />
            ))}
          </ListBox>
        </div>
      </Suspense>
    </>
  )
}

interface IconListItemProps {
  name: string
  Icon: React.ComponentType<any>
}

export function IconListItem({ name, Icon }: IconListItemProps) {
  const [isSelected, setSelected] = React.useState(false)
  const searchParams = useSearchParams()
  const selectedSize = searchParams.get('s') ?? 'size-5'
  const handleCopy = (type: 'text' | 'jsx') => {
    const textToCopy = type === 'jsx' ? `<${name} />` : name
    copyToClipboard(textToCopy).then(() => {
      toast(
        <>
          <code className="text-xs tracking-tight mr-1">{textToCopy}</code> copied to clipboard.
        </>,
        {
          closeButton: false
        }
      )
    })
  }
  const triggerRef = useRef<HTMLButtonElement>(null)
  return (
    <ListBoxItem
      data-open={isSelected}
      ref={triggerRef}
      onAction={() => setSelected(true)}
      className={item()}
      textValue={name}
    >
      <Icon className={selectedSize} key={name} />
      <Menu isOpen={isSelected} onOpenChange={setSelected}>
        <MenuContent triggerRef={triggerRef} showArrow>
          <MenuItem onAction={() => handleCopy('jsx')}>Copy JSX</MenuItem>
          <MenuItem onAction={() => copySvgToClipboard(Icon)}>Copy SVG</MenuItem>
          <MenuItem onAction={() => handleCopy('text')}>Copy Name</MenuItem>
          <MenuSeparator />
          <MenuItem onAction={() => downloadSvg(Icon, name)}>
            Download SVG
            <IconDownload className="ml-auto" />
          </MenuItem>
        </MenuContent>
      </Menu>
    </ListBoxItem>
  )
}

const copySvgToClipboard = (IconComponent: React.ComponentType) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  navigator.clipboard.writeText(svgString).then(() => {
    toast('SVG copied to clipboard')
  })
}

const downloadSvg = (IconComponent: React.ComponentType, fileName: string) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}.svg`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}
