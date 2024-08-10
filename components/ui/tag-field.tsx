'use client'

import * as React from 'react'

import type { Key, ValidationResult } from 'react-aria-components'
import { Group, TextField } from 'react-aria-components'
import type { ListData } from 'react-stately'
import { tv } from 'tailwind-variants'

import { Input } from './field'
import { cn, composeTailwindRenderProps, ctr } from './primitive'
import { Tag, TagGroup, TagList } from './tag-group'
import type { TextFieldProps } from './text-field'

const tagFields = tv({
  slots: {
    base: [
      'relative px-1 flex min-h-10 flex-row flex-wrap items-center rounded-lg shadow-sm border',
      'has-[input[data-focused=true]]:border-primary',
      'has-[input[data-invalid=true][data-focused=true]]:border-danger has-[input[data-invalid=true]]:border-danger has-[input[data-invalid=true]]:ring-danger/20',
      'has-[input[data-focused=true]]:ring-4 has-[input[data-focused=true]]:ring-primary/20'
    ]
  }
})

const { base } = tagFields()

interface TagItem {
  id: number
  name: string
}

interface TagFieldProps {
  'aria-label'?: TextFieldProps['aria-label']
  'aria-labelledby'?: TextFieldProps['aria-labelledby']
  isDisabled?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
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
    const tagNames = inputValue.split(/,/)
    if (maxTagsToAdd <= 0) {
      setIsInvalid(true)
      setInputValue('')
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
    if (e.key === 'Enter' || e.key === ',') {
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

  return (
    <Group className={ctr(className, cn('flex flex-col gap-2', props.isDisabled && 'opacity-50'))}>
      <TagGroup aria-label="List tag inserted" selectionMode="multiple" onRemove={onRemove}>
        <div className={base()}>
          <div className="inline-flex flex-1 flex-wrap items-center">
            <TagList
              items={list.items}
              className={cn(
                list.items.length !== 0 && 'px-1 py-1.5',
                '[&_.jdt3lr2x]:rounded-[calc(var(--radius)-2.5px)] [&_.jdt3lr2x]:cursor-default last:[&_.jdt3lr2x]:-mr-1 outline-none gap-1.5'
              )}
            >
              {(item) => <Tag>{item.name}</Tag>}
            </TagList>
            <TextField
              className={composeTailwindRenderProps(className, 'group flex flex-col gap-1')}
              isDisabled={props.isDisabled}
              aria-label={props?.label ?? props['aria-label']}
              isInvalid={isInvalid}
              onKeyDown={onKeyDown}
              onChange={setInputValue}
              value={inputValue}
              {...props}
            >
              <Input
                placeholder={maxTagsToAdd <= 0 ? 'Remove one to add more' : props.placeholder}
              />
            </TextField>
          </div>
        </div>
      </TagGroup>
      {name && (
        <input hidden name={name} value={list.items.map((i) => i.name).join(',')} readOnly />
      )}
    </Group>
  )
}

export { TagField }