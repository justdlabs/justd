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
  { id: "neutral", textValue: "Neutral" },
  { id: "gray", textValue: "Gray" },
  { id: "slate", textValue: "Slate" },
  { id: "azure", textValue: "Azure" },
  { id: "sky", textValue: "Sky" },
  { id: "amber", textValue: "Amber" },
  { id: "violet", textValue: "Violet" },
  { id: "emerald", textValue: "Emerald" },
  { id: "rose", textValue: "Rose" },
  { id: "turquoise", textValue: "Turquoise" },
  { id: "orange", textValue: "Orange" }
]

interface Props {
  themeId: ThemeProps
  applyTheme: (theme: ThemeProps) => void
}

function formatThemeData(themeId: ThemeProps) {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base ${JSON.stringify(themesList[themeId], null, 2)
    .replace(/"root":/g, ":root")
    .replace(/"dark":/g, ".dark")
    .replace(/},\n\s+\.dark/g, "}\n\n  .dark")
    .replaceAll(",", ";")
    .replaceAll('"', "")}

@layer base {
  html {
    @apply scroll-smooth;
  }

  * {
    @apply border-border;
    font-feature-settings: 'cv11', 'ss01';
    font-variation-settings: 'opsz' 850;
    text-rendering: optimizeLegibility;
    scrollbar-width: thin;
  }

  body {
    @apply bg-bg text-fg;
  }

  /* dark mode */
  .dark {
    scrollbar-width: thin;

    @media (prefers-color-scheme: dark) {
      * {
        scrollbar-width: thin;
      }
    }
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    @apply bg-muted;
    border-radius: 14px;
    border: 3px solid transparent;
  }
}`
}

export function Controller({ themeId, applyTheme }: Props) {
  const [, setSelectedTheme] = React.useState<Key>(themeId)
  const [open, setOpen] = React.useState(false)

  const handleCopy = () => {
    const themeData = formatThemeData(themeId)
    copyToClipboard(themeData).then(() => {
      toast.success("Copied to clipboard", {
        classNames: {
          toast: "[&:has([data-icon])_[data-content]]:!ml-0",
          icon: "hidden"
        }
      })
      setOpen(false)
    })
  }

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
                {formatThemeData(themeId)}
              </pre>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close>Close</Sheet.Close>
              <Button onPress={handleCopy}>Copy</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet>
        <Select
          aria-label="Select theme"
          className="min-w-56"
          selectedKey={themeId}
          onSelectionChange={(value) => {
            setSelectedTheme(value)
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
