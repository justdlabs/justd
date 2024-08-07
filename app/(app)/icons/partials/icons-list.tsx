import React from 'react'

import * as icons from 'justd-icons'
import type { Key } from 'react-aria-components'
import { ListBox, ListBoxItem } from 'react-aria-components'
import { toast } from 'sonner'
import { useDebounce } from 'use-debounce'
import { copyToClipboard } from 'usemods'

import { Controller } from './controller'
import { box, item } from './styles'

export function IconsList() {
  const [selectedSize, setSelectedSize] = React.useState<Key>('size-5')
  const [value, setValue] = React.useState('')
  const [debouncedValue] = useDebounce(value, 300)

  const filteredIcons = Object.entries(icons).filter(([name]) =>
    name.toLowerCase().includes(debouncedValue.toLowerCase())
  )

  return (
    <>
      <Controller
        value={value}
        setValue={setValue}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <ListBox aria-label="List Icon" layout="grid" className={box()}>
        {filteredIcons.map(([name, Icon]) => (
          <IconListItem key={name} name={name} Icon={Icon} selectedSize={selectedSize} />
        ))}
      </ListBox>
    </>
  )
}

interface IconListItemProps {
  name: string
  Icon: React.ComponentType<any>
  selectedSize: Key
}

export function IconListItem({ name, Icon, selectedSize }: IconListItemProps) {
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
