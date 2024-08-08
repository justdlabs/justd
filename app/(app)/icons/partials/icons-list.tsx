'use client'

import React, { Suspense } from 'react'

import * as icons from 'justd-icons'
import { useSearchParams } from 'next/navigation'
import { ListBox, ListBoxItem } from 'react-aria-components'
import { toast } from 'sonner'
import { Loader } from 'ui'
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
          <ListBox aria-label="List Icon" layout="grid" className={box()}>
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
  const searchParams = useSearchParams()
  const selectedSize = searchParams.get('s')
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

  return (
    <ListBoxItem className={item()} onAction={() => handleCopy('jsx')} key={name} textValue={name}>
      <Icon className={selectedSize} key={name} />
    </ListBoxItem>
  )
}
