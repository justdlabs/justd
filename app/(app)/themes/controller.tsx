import React from "react"

import type { Key } from "react-aria-components"
import { toast } from "sonner"
import { Button, Select, Sheet } from "ui"
import { copyToClipboard } from "usemods"

import type { ThemeProps } from "./themes-list"
import { themesList } from "./themes-list"

const availableThemes = [
  { id: "default", textValue: "Default" },
  { id: "zinc", textValue: "Zinc" },
  { id: "slate", textValue: "Slate" },
  { id: "regent", textValue: "Regent" }
]

interface Props {
  themeId: ThemeProps
  applyTheme: (theme: ThemeProps) => void
}

export function Controller({ themeId, applyTheme }: Props) {
  const [selectedTheme, setSelectedTheme] = React.useState<Key>(themeId)
  const [open, setOpen] = React.useState(false)
  return (
    <div className="flex justify-end mb-6">
      <div className="flex items-center gap-2">
        <Button onPress={() => setOpen(true)}>Export</Button>
        <Sheet onOpenChange={setOpen} isOpen={open}>
          <Sheet.Content classNames={{ content: "sm:w-1/2 sm:max-w-lg" }}>
            <Sheet.Header
              className="[&>[slot=title]]:capitalize"
              title={`${themeId} theme`}
              description="Slap this code into your CSS file. It's a bunch of variables that you can use to customize your theme."
            />
            <Sheet.Body>
              <pre
                className="font-mono text-sm p-4 overflow-x-auto bg-secondary border border-fg/10 rounded-lg"
                lang="json"
              >
                {JSON.stringify(themesList[themeId], null, 2)}
              </pre>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close>Close</Sheet.Close>
              <Button
                onPress={() => {
                  copyToClipboard(JSON.stringify(themesList[themeId], null, 2)).then(() => {
                    toast.success("Copied to clipboard", {
                      classNames: {
                        toast: "[&:has([data-icon])_[data-content]]:!ml-0",
                        icon: "hidden"
                      }
                    })
                    setOpen(false)
                  })
                }}
              >
                Copy
              </Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet>
        <Select
          className="min-w-56"
          selectedKey={themeId}
          onSelectionChange={(value) => {
            setSelectedTheme(value)
            console.log(value)
            applyTheme(value as ThemeProps)
          }}
        >
          <Select.Trigger />
          <Select.List items={availableThemes}>
            {(item) => {
              const theme = themesList[item.id as ThemeProps]
              const primaryColor = theme.root["--primary"]
              return (
                <Select.Option {...item}>
                  <div
                    className="size-4 mr-0 rounded ring-1 ring-inset ring-fg/20"
                    style={{
                      backgroundColor: `hsl(${primaryColor})`
                    }}
                  />
                  {item.textValue}
                </Select.Option>
              )
            }}
          </Select.List>
        </Select>
      </div>
    </div>
  )
}
