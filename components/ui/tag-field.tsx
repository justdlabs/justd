'use client'

import * as React from 'react'

import { Tag, TagGroup, TagList } from '@/components/ui/tag-group'
import { TextFieldPrimitive, TextFieldProps } from '@/components/ui/text-field'
import { TextField } from '@/components/ui/text-field'
import type { Key } from 'react-aria-components'
import { Group } from 'react-aria-components'
import type { ListData } from 'react-stately'

import { cn, ctr } from './primitive'

interface TagItem {
  id: number
  name: string
}

interface TagFieldProps extends Omit<TextFieldProps, 'isRequired'> {
  max?: number
  min?: number
  className?: string
  children?: React.ReactNode
  name?: string
  list: ListData<TagItem>
  onItemInserted?: (tag: TagItem) => void
  onItemCleared?: (tag: TagItem) => void
  appearance?: 'outline' | 'plain'
}

const TagField = ({
  appearance = 'outline',
  name,
  className,
  list,
  onItemCleared,
  onItemInserted,
  ...props
}: TagFieldProps) => {
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  const existingTagCount = list.items.length
  const maxTags = props.max !== undefined ? props.max : Infinity
  const maxTagsToAdd = maxTags - existingTagCount

  const insertTag = () => {
    const tagNames = inputValue.split(/[,;]/)

    if (maxTagsToAdd <= 0) {
      setIsInvalid(true)
      return
    }

    tagNames.slice(0, maxTagsToAdd).forEach((tagName) => {
      const formattedName = tagName
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[\t\r\n]/g, '')

      if (
        formattedName &&
        !list.items.some(({ name }) => name.toLowerCase() === formattedName.toLowerCase())
      ) {
        const tag = {
          id: (list.items.at(-1)?.id ?? 0) + 1,
          name: formattedName
        }

        list.append(tag)
        onItemInserted?.(tag)
      }
    })

    setInputValue('')
  }

  const clearInvalidFeedback = () => {
    if (maxTags - list.items.length <= maxTagsToAdd) {
      setIsInvalid(false)
    }
  }

  const onRemove = (keys: Set<Key>) => {
    list.remove(...keys)
    onItemCleared?.(list.getItem([...keys][0]))
    clearInvalidFeedback()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ';') {
      e.preventDefault()
      insertTag()
    }

    if (e.key === 'Backspace' && inputValue === '') {
      popLast()
      clearInvalidFeedback()
    }
  }

  const popLast = React.useCallback(() => {
    if (list.items.length == 0) {
      return
    }

    const endKey = list.items[list.items.length - 1]

    if (endKey !== null) {
      list.remove(endKey.id)
      onItemCleared?.(list.getItem(endKey.id))
    }
  }, [list, onItemCleared])
  const Element = appearance === 'outline' ? TextField : TextFieldPrimitive
  return (
    <Group className={ctr(className, cn('flex flex-col gap-2', props.isDisabled && 'opacity-50'))}>
      <Element
        isDisabled={props.isDisabled}
        label={props?.label ?? undefined}
        aria-label={props?.label ?? props['aria-label']}
        description={props?.description ?? undefined}
        isInvalid={isInvalid}
        errorMessage={
          maxTagsToAdd === 0 && !props.errorMessage
            ? `You can only add ${maxTags} items.`
            : undefined
        }
        onKeyDown={onKeyDown}
        onChange={setInputValue}
        value={inputValue}
        {...props}
      />
      <TagGroup aria-label="List tag inserted" selectionMode="multiple" onRemove={onRemove}>
        <TagList items={list.items}>
          {(item) => <Tag className="cursor-default selected:bg-transparent">{item.name}</Tag>}
        </TagList>
      </TagGroup>
      {name && (
        <input hidden name={name} value={list.items.map((i) => i.name).join(',')} readOnly />
      )}
    </Group>
  )
}

export { TagField }
