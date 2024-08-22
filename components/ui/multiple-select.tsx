"use client"

import * as React from "react"

import { IconChevronLgDown } from "justd-icons"
import { useFilter } from "react-aria"
import type { ComboBoxProps as ComboBoxPrimitiveProps, Key } from "react-aria-components"
import { ComboBox, Group } from "react-aria-components"
import type { ListData } from "react-stately"
import { useListData } from "react-stately"
import { tv } from "tailwind-variants"

import { Button } from "./button"
import type { FieldProps } from "./field"
import { Description, Input, Label } from "./field"
import { ListBox } from "./list-box"
import { Popover } from "./popover"
import { cn } from "./primitive"
import type { RestrictedIntent, TagGroupProps } from "./tag-group"
import { Tag } from "./tag-group"
import { VisuallyHidden } from "./visually-hidden"

const multiSelectStyles = tv({
  slots: {
    multiSelectField: "group flex w-full min-w-80 flex-col gap-1",
    multiSelect: [
      "relative px-1 flex min-h-10 flex-row flex-wrap items-center rounded-lg shadow-sm border",
      "has-[input[data-focused=true]]:border-primary",
      "has-[input[data-invalid=true][data-focused=true]]:border-danger has-[input[data-invalid=true]]:border-danger has-[input[data-invalid=true]]:ring-danger/20",
      "has-[input[data-focused=true]]:ring-4 has-[input[data-focused=true]]:ring-primary/20"
    ],
    chevronButton:
      "size-8 -mr-2 grid place-content-center rounded-sm hover:text-fg focus:text-fg text-muted-fg",
    input: "flex-1 py-1 px-0.5 ml-1 shadow-none ring-0",
    comboBoxChild: "inline-flex flex-1 flex-wrap items-center px-0",
    comboBox: "group peer flex flex-1"
  }
})

const { multiSelectField, multiSelect, chevronButton, input, comboBox, comboBoxChild } =
  multiSelectStyles()

interface FieldState {
  selectedKey: Key | null
  inputValue: string
}

interface SelectedKey {
  id: Key
  name: string
}

interface MultipleSelectProps<T extends object>
  extends FieldProps,
    Omit<
      ComboBoxPrimitiveProps<T>,
      | "children"
      | "validate"
      | "allowsEmptyCollection"
      | "selectedKey"
      | "inputValue"
      | "className"
      | "value"
      | "onSelectionChange"
      | "onInputChange"
    >,
    Pick<TagGroupProps, "shape"> {
  intent?: RestrictedIntent
  items: Array<T>
  selectedItems: ListData<T>
  className?: string
  onItemInserted?: (key: Key) => void
  onItemCleared?: (key: Key) => void
  renderEmptyState?: (inputValue: string) => React.ReactNode
  tag: (item: T) => React.ReactNode
  children: React.ReactNode | ((item: T) => React.ReactNode)
  max?: number
  min?: number
}

const MultipleSelect = <T extends SelectedKey>({
  children,
  items,
  selectedItems,
  onItemCleared,
  onItemInserted,
  className,
  name,
  renderEmptyState,
  ...props
}: MultipleSelectProps<T>) => {
  const [isInvalid, setIsInvalid] = React.useState(false)
  const tagGroupIdentifier = React.useId()
  const triggerRef = React.useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = React.useState(0)

  const { contains } = useFilter({ sensitivity: "base" })
  const selectedKeys = selectedItems.items.map((i) => i.id)

  const existingTagCount = selectedItems.items.length
  const maxTags = props.max !== undefined ? props.max : Infinity
  const maxTagsToAdd = maxTags - existingTagCount

  const updateInvalidState = (selectedCount: number) => {
    const maxTags = props.max !== undefined ? props.max : Infinity
    setIsInvalid(selectedCount >= maxTags)
  }

  const filter = React.useCallback(
    (item: T, filterText: string) =>
      !selectedKeys.includes(item.id) && contains(item.name, filterText),
    [contains, selectedKeys]
  )

  const accessibleList = useListData({
    initialItems: items,
    filter
  })

  const [fieldState, setFieldState] = React.useState<FieldState>({
    selectedKey: null,
    inputValue: ""
  })

  const onRemove = React.useCallback(
    (keys: Set<Key>) => {
      if (props.min !== undefined && selectedItems.items.length <= props.min) return

      const key = keys.values().next().value
      selectedItems.remove(key)
      setFieldState({ inputValue: "", selectedKey: null })
      onItemCleared?.(key)
      updateInvalidState(selectedItems.items.length - 1)
    },
    [selectedItems, onItemCleared, props.min]
  )

  const onSelectionChange = (id: Key | null) => {
    if (!id) return

    const item = accessibleList.getItem(id)
    const maxTags = props.max !== undefined ? props.max : Infinity

    if (!item) return

    if (!selectedKeys.includes(id)) {
      if (selectedItems.items.length >= maxTags) {
        setIsInvalid(true)

        const timeoutId = setTimeout(() => {
          setIsInvalid(false)
        }, 2000)

        return () => clearTimeout(timeoutId)
      }

      selectedItems.append(item)
      setFieldState({
        inputValue: "",
        selectedKey: id
      })
      onItemInserted?.(id)
    }

    accessibleList.setFilterText("")
  }
  const onInputChange = (v: string) => {
    setFieldState((prevState) => ({
      inputValue: v,
      selectedKey: v === "" ? null : prevState.selectedKey
    }))

    accessibleList.setFilterText(v)
  }

  const popLast = React.useCallback(() => {
    if (
      selectedItems.items.length == 0 ||
      (props.min !== undefined && selectedItems.items.length <= props.min)
    ) {
      return
    }

    const endKey = selectedItems.items[selectedItems.items.length - 1]

    if (endKey !== null) {
      selectedItems.remove(endKey.id)
      onItemCleared?.(endKey.id)
      updateInvalidState(selectedItems.items.length - 1)
    }

    setFieldState({
      inputValue: "",
      selectedKey: null
    })
  }, [selectedItems, onItemCleared])

  const onKeyDownCapture = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && fieldState.inputValue === "") {
        popLast()
      }
    },
    [popLast, fieldState.inputValue]
  )

  React.useEffect(() => {
    const trigger = triggerRef.current
    if (!trigger) return

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
    <div className={multiSelectField({ className })}>
      {props.label && <Label>{props.label}</Label>}
      <Group className={props.isDisabled ? "opacity-50" : ""}>
        <div ref={triggerRef} className={multiSelect({ className })}>
          <Tag.Group
            shape={props.shape}
            intent={props.intent}
            aria-label="Selected items"
            id={tagGroupIdentifier}
            onRemove={onRemove}
          >
            <Tag.List
              items={selectedItems.items}
              className={cn(
                selectedItems.items.length !== 0 && "px-1 py-1.5",
                "last:[&_.jdt3lr2x]:-mr-1 outline-none gap-1.5",
                props.shape === "square" && "[&_.jdt3lr2x]:rounded-[calc(var(--radius)-4px)]"
              )}
            >
              {props.tag}
            </Tag.List>
          </Tag.Group>
          <ComboBox
            {...props}
            isInvalid={isInvalid}
            aria-label="Available items"
            allowsEmptyCollection
            className={comboBox()}
            items={accessibleList.items}
            selectedKey={fieldState.selectedKey}
            inputValue={fieldState.inputValue}
            onSelectionChange={onSelectionChange}
            onInputChange={onInputChange}
          >
            <div className={comboBoxChild({ className })}>
              <Input
                placeholder={maxTagsToAdd <= 0 ? "Remove one to add more" : props.placeholder}
                className={input()}
                onBlur={() => {
                  setFieldState({
                    inputValue: "",
                    selectedKey: null
                  })
                  accessibleList.setFilterText("")
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
            <Popover.Picker
              className="max-w-none"
              style={{ width: `${width}px` }}
              triggerRef={triggerRef}
              trigger="ComboBox"
            >
              <ListBox.Picker
                renderEmptyState={() =>
                  renderEmptyState ? (
                    renderEmptyState(fieldState.inputValue)
                  ) : (
                    <Description className="p-3 block">
                      {fieldState.inputValue ? (
                        <>
                          No results found for:{" "}
                          <strong className="font-medium text-fg">{fieldState.inputValue}</strong>
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
              </ListBox.Picker>
            </Popover.Picker>
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
      </Group>
      {props.description && <Description>{props.description}</Description>}
      {name && <input hidden name={name} value={selectedKeys.join(",")} readOnly />}
    </div>
  )
}

MultipleSelect.Tag = Tag.Item
MultipleSelect.Option = ListBox.Item

export { MultipleSelect, type SelectedKey }
