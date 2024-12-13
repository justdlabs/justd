import { useEffect, useMemo, useRef, useState } from "react"

import { useFilter } from "react-aria"
import {
  Button,
  ComboBox,
  Dialog,
  Input,
  ListBox,
  ListBoxItem,
  Modal,
  ModalOverlay,
  Popover,
  Text,
} from "react-aria-components"

const items = [
  { id: 1, name: "Open file..." },
  { id: 2, name: "Create folder..." },
  { id: 3, name: "Open email..." },
  { id: 4, name: "Empty trash" },
  { id: 5, name: "Switch workspace..." },
  { id: 6, name: "Add teammate..." },
  { id: 7, name: "Quit application" },
]

export function CmdK() {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [filterValue, setFilterValue] = useState("")
  const { contains } = useFilter({ sensitivity: "base" })
  const filteredItems = useMemo(() => items.filter((i) => contains(i.name, filterValue)), [contains, filterValue])

  useEffect(() => {
    function toggle(e: KeyboardEvent) {
      if (e.key === "k" && e.metaKey) {
        setOpen((o) => !o)
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", toggle, { capture: true })

    return () => {
      window.removeEventListener("keydown", toggle, { capture: true })
    }
  }, [])

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus()
      }, 50)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [open])

  return (
    <>
      <Button
        className="flex gap-1 items-center self-center py-2 px-4 rounded ring-offset-2 transition text-stone-800 ring-stone-600 data-focused:outline-hidden hover:bg-stone-100 focus-visible:ring-3"
        onPress={() => setOpen(true)}
      >
        <kbd className="p-1 rounded-md border border-b-2 border-stone-400">cmd+k</kbd>
        to open
      </Button>
      <ModalOverlay
        isOpen={open}
        className="flex overflow-y-auto fixed inset-0 z-10 justify-center p-4 min-h-full text-center duration-150 entering:fade-in entering:animate-in bg-black/25 pt-[33dvh] backdrop-blur-sm"
      >
        <Modal>
          <Dialog className="data-focused:outline-hidden" aria-label="command bar">
            <ComboBox
              aria-label="command bar"
              items={filteredItems}
              inputValue={filterValue}
              menuTrigger="focus"
              onInputChange={setFilterValue}
              onSelectionChange={() => {
                setOpen(false)
              }}
            >
              <div className="flex flex-col items-center">
                <Input
                  ref={inputRef}
                  aria-label="Search for apps, files, anything..."
                  placeholder="Search for apps, files, anything..."
                  className="p-3 rounded-t-lg w-[66vw] bg-stone-100 text-stone-800 data-focused:outline-hidden"
                />
                {filteredItems.length === 0 ? (
                  <Text
                    className="p-3 rounded-b-lg border-t-2 w-[66vw] border-b-stone-300 bg-stone-100 text-stone-800"
                    slot="description"
                  >
                    Hmm, we couldn't find anything
                  </Text>
                ) : (
                  <></>
                )}
              </div>

              <Popover
                offset={0}
                className="p-3 rounded-b-lg border-t-2 duration-75 entering:slide-in-from-top-2 w-[66vw] entering:animate-in border-b-stone-300 bg-stone-100 text-stone-800"
              >
                <ListBox className="flex flex-col gap-2">
                  {(i: (typeof items)[number]) => (
                    <ListBoxItem
                      textValue={i.name}
                      className="flex gap-4 items-center p-2 rounded-md data-focused:bg-stone-200"
                    >
                      {i.name}
                    </ListBoxItem>
                  )}
                </ListBox>
              </Popover>
            </ComboBox>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  )
}
