import React, { useState } from 'react'

import { ctr } from '@/components/ui/primitive'
import { IconChevronLgDown } from 'justd-icons'
import { useFilter } from 'react-aria'
import type {
  ComboBoxProps as ComboBoxPrimitiveProps,
  GroupProps,
  Key
} from 'react-aria-components'
import { ComboBox, Group } from 'react-aria-components'
import type { ListData } from 'react-stately'
import { useListData } from 'react-stately'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { Description, Input, Label } from './field'
import { ListBoxItem, ListBoxPicker } from './list-box'
import { PopoverPicker } from './popover'
import { TagGroup, TagList } from './tag-group'
import { VisuallyHidden } from './visually-hidden'

const multiSelectStyles = tv({
  slots: {
    multiSelectField: 'group flex w-full flex-col gap-1',
    multiSelect: [
      'relative px-1 flex min-h-10 min-w-80 flex-row flex-wrap items-center rounded-lg shadow-sm border',
      'has-[input[data-focused=true]]:border-primary',
      'has-[input[data-invalid=true][data-focused=true]]:border-danger has-[input[data-invalid=true]]:border-danger',
      'has-[input[data-focused=true]]:ring-4 has-[input[data-focused=true]]:ring-primary/20'
    ],
    chevronButton:
      'size-8 -mr-2 grid place-content-center rounded-sm hover:text-fg focus:text-fg text-muted-fg',
    input: 'flex-1 py-1 border-0 px-0.5 ml-1 shadow-none ring-0',
    comboBoxChild: 'inline-flex flex-1 flex-wrap items-center px-0',
    comboBox: 'group peer -mt-1 flex flex-1'
  }
})

const { multiSelectField, multiSelect, chevronButton, input, comboBox, comboBoxChild } =
  multiSelectStyles()

interface MultipleSelectProps<T extends object>
  extends Omit<
    ComboBoxPrimitiveProps<T>,
    | 'children'
    | 'validate'
    | 'allowsEmptyCollection'
    | 'selectedKey'
    | 'inputValue'
    | 'className'
    | 'value'
    | 'onSelectionChange'
    | 'onInputChange'
  > {
  items: Array<T>
  selectedList: ListData<T>
  className?: string
  onItemAdd?: (key: Key) => void
  onItemRemove?: (key: Key) => void
  renderEmptyState?: (inputValue: string) => React.ReactNode
  tag: (item: T) => React.ReactNode
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

interface MultiSelectFieldProps extends GroupProps {
  children: React.ReactNode
  label?: string
  description?: string
}

const MultipleSelectField = ({ children, className, ...props }: MultiSelectFieldProps) => {
  return (
    <Group role="presentation" {...props} className={ctr(className, multiSelectField())}>
      {props.label && <Label>{props.label}</Label>}
      {children}
      {props.description && <Description>{props.description}</Description>}
    </Group>
  )
}

interface MultipleSelectExtended {
  id: Key
  textValue: string
}

const MultipleSelect = <T extends MultipleSelectExtended>({
  children,
  items,
  selectedList,
  onItemRemove,
  onItemAdd,
  className,
  name,
  renderEmptyState,
  ...props
}: MultipleSelectProps<T>) => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const selectedKeys = selectedList.items.map((i) => i.id)

  const filter = React.useCallback(
    (item: T, filterText: string) => {
      return !selectedKeys.includes(item.id) && contains(item.textValue, filterText)
    },
    [contains, selectedKeys]
  )

  const availableList = useListData({
    initialItems: items,
    filter
  })

  const [fieldState, setFieldState] = useState<{
    selectedKey: Key | null
    inputValue: string
  }>({
    selectedKey: null,
    inputValue: ''
  })

  const onRemove = React.useCallback(
    (keys: Set<Key>) => {
      const key = keys.values().next().value
      selectedList.remove(key)
      setFieldState({
        inputValue: '',
        selectedKey: null
      })
      onItemRemove?.(key)
    },
    [selectedList, onItemRemove]
  )

  const onSelectionChange = (id: Key | null) => {
    if (!id) {
      return
    }

    const item = availableList.getItem(id)

    if (!item) {
      return
    }

    if (!selectedKeys.includes(id)) {
      selectedList.append(item)
      setFieldState({
        inputValue: '',
        selectedKey: id
      })
      onItemAdd?.(id)
    }

    availableList.setFilterText('')
  }

  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey
    }))

    availableList.setFilterText(value)
  }

  const deleteLast = React.useCallback(() => {
    if (selectedList.items.length == 0) {
      return
    }

    const lastKey = selectedList.items[selectedList.items.length - 1]

    if (lastKey !== null) {
      selectedList.remove(lastKey.id)
      onItemRemove?.(lastKey.id)
    }

    setFieldState({
      inputValue: '',
      selectedKey: null
    })
  }, [selectedList, onItemRemove])

  const onKeyDownCapture = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && fieldState.inputValue === '') {
        deleteLast()
      }
    },
    [deleteLast, fieldState.inputValue]
  )

  const tagGroupId = React.useId()
  const triggerRef = React.useRef<HTMLDivElement | null>(null)

  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const trigger = triggerRef.current
    if (!trigger) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.target.clientWidth)
      }
    })

    observer.observe(trigger)
    return () => {
      observer.unobserve(trigger)
    }
  }, [triggerRef])

  const triggerButtonRef = React.useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <div ref={triggerRef} className={multiSelect({ className })}>
        <TagGroup id={tagGroupId} onRemove={onRemove}>
          <TagList
            items={selectedList.items}
            className={twMerge(
              selectedList.items.length !== 0 && 'px-1 py-2',
              '[&_.jdt3lr2x]:rounded-sm outline-none gap-1.5'
            )}
          >
            {props.tag}
          </TagList>
        </TagGroup>
        <ComboBox
          {...props}
          allowsEmptyCollection
          className={comboBox({ className })}
          items={availableList.items}
          selectedKey={fieldState.selectedKey}
          inputValue={fieldState.inputValue}
          onSelectionChange={onSelectionChange}
          onInputChange={onInputChange}
        >
          <div className={comboBoxChild({ className })}>
            <Input
              className={input()}
              onBlur={() => {
                setFieldState({
                  inputValue: '',
                  selectedKey: null
                })
                availableList.setFilterText('')
              }}
              onKeyDownCapture={onKeyDownCapture}
            />

            <VisuallyHidden>
              <Button
                slot="remove"
                aria-label="Remove"
                appearance="plain"
                size="square-petite"
                ref={triggerButtonRef}
              >
                <IconChevronLgDown />
              </Button>
            </VisuallyHidden>
          </div>
          <PopoverPicker
            className="max-w-none"
            style={{ width: `${width}px` }}
            triggerRef={triggerRef}
            trigger="ComboBox"
          >
            <ListBoxPicker
              renderEmptyState={() =>
                renderEmptyState ? (
                  renderEmptyState(fieldState.inputValue)
                ) : (
                  <Description className="p-3 block">
                    {fieldState.inputValue ? (
                      <>
                        No results found for:{' '}
                        <strong className="font-semibold">{fieldState.inputValue}</strong>
                      </>
                    ) : (
                      `No options`
                    )}
                  </Description>
                )
              }
              selectionMode="multiple"
            >
              {children}
            </ListBoxPicker>
          </PopoverPicker>
        </ComboBox>
        <div className="relative px-1 ml-auto flex items-center justify-center" aria-hidden>
          <button
            type="button"
            className={chevronButton()}
            onClick={() => triggerButtonRef.current?.click()}
            tabIndex={-1}
          >
            <IconChevronLgDown className="peer/[data-open]:rotate-180 size-4" />
          </button>
        </div>
      </div>

      {name && <input hidden name={name} value={selectedKeys.join(',')} readOnly />}
    </>
  )
}

const MultipleSelectItem = ListBoxItem

export { MultipleSelectField, MultipleSelect, MultipleSelectItem }
