'use client'

import * as React from 'react'

import { IconCircleXFill } from '@irsyadadl/paranoid'
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk'
import { Badge } from './badge'

interface ItemProps {
  label: string
  value: string
}

interface Props {
  items: ItemProps[]
  placeholder?: string
  selected: ItemProps[]
  setSelected: React.Dispatch<React.SetStateAction<ItemProps[]>>
  max?: number
}

export function MultiSelect({ items, placeholder = 'Select items...', max = 5, selected, setSelected }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const handleUnselect = React.useCallback(
    (item: ItemProps) => {
      setSelected((prev) => prev.filter((s) => s.value !== item.value))
    },
    [setSelected]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }

        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    [setSelected]
  )
  const selectables = items.filter((item) => !selected.includes(item))
  React.useEffect(() => {
    if (selected.length >= max) {
      setOpen(false)
    }
  }, [selected, max])
  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group rounded-md border border-input bg-background px-2 py-[0.55rem] text-sm transition duration-200 focus-within:border-primary/70 focus-within:ring-[0.20rem] focus-within:ring-primary/20 focus-within:ring-offset-0">
        <div className="flex flex-wrap gap-1">
          {selected.map((item, index) => {
            return (
              <Badge key={index} className="inline-flex items-center rounded-sm px-1">
                <span className="text-xs">{item.label}</span>
                <button
                  aria-label={`Remove ${item.label} option`}
                  aria-roledescription="button to remove option"
                  type="button"
                  className="inline-grid size-4 place-content-center rounded-full border border-transparent focus:border-fg focus:text-fg focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(item)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <span className="sr-only">Remove {item.label} option</span>
                  <IconCircleXFill className="size-3.5 hover:text-fg" />
                </button>
              </Badge>
            )
          })}

          <CommandInput
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => {
              if (selected.length < max) {
                setOpen(true)
              }
            }}
            placeholder={selected.length >= max ? 'Remove one to select more' : placeholder}
            className="ml-0.5 flex-1 bg-transparent outline-none placeholder:text-muted-fg"
          />
        </div>
      </div>
      <div className="relative">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 mt-2 max-h-72 w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-popover p-1 text-popover-fg shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto p-0">
                {selectables.map((item) => (
                  <CommandItem
                    disabled={selected.includes(item)}
                    key={item.value}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue('')
                      setSelected((prev) => [...prev, item])
                    }}
                    className="relative flex w-full cursor-pointer justify-between rounded-md p-2 text-sm transition-colors data-[selected=true]:bg-primary data-[selected=true]:text-primary-fg"
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  )
}
