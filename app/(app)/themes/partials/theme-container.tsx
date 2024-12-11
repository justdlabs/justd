"use client"

import * as React from "react"

import { Blocks } from "@/app/(app)/themes/partials/blocks"
import { GeneratedTheme } from "@/app/(app)/themes/partials/generated-theme"
import { ThemeCustomizer } from "@/app/(app)/themes/partials/theme-customizer"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { IconBrandCss, IconChevronLgDown, IconDuplicate, IconLayoutColumnRightsideFill } from "justd-icons"
import { toast } from "sonner"
import { Button, Container, Heading, Menu, Sheet } from "ui"

import { generateTheme } from "./themes"

export function ThemeContainer() {
  const [selectedColors, setSelectedColors] = React.useState({
    primary: "blue",
    gray: "zinc",
    accent: "blue",
    radius: "0.5rem"
  })

  const copy = () => {
    navigator.clipboard.writeText(generateTheme(selectedColors))
    toast(`Copied to clipboard.`)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="py-4 sm:py-16">
      <Container>
        <div className="border divide-y lg:divide-y-0 lg:divide-x rounded-lg flex-col lg:flex-row flex flex">
          <div className="w-full lg:w-1/2 p-4 lg:p-6">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end gap-4 mb-4 lg:mb-6">
              <div>
                <Heading level={2} className="sm:text-lg">
                  Theme Customizer
                </Heading>
                <p className="text-muted-fg text-sm">
                  Customize your theme by selecting colors from the color picker or by entering a hex code.
                </p>
              </div>
            </div>
            <div>
              <ThemeCustomizer {...{ selectedColors, setSelectedColors }} />
              <div className="mt-3 justify-end flex">
                <Button className="lg:hidden w-full flex" onPress={handleOpen}>
                  <IconBrandCss />
                  Get Theme
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4 pb-4 pt-2 lg:p-6">
            <div className="mb-4 lg:mb-6 flex justify-between">
              <div>
                <Heading level={2} className="sm:text-lg">
                  Generated Theme
                </Heading>
                <p className="text-muted-fg text-sm">The generated colors are based on the selected gray color.</p>
              </div>
              <Menu>
                <Button className="lg:flex hidden">
                  Get Theme...
                  <IconChevronLgDown />
                </Button>
                <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
                  <Menu.Item onAction={copy}>
                    <IconDuplicate />
                    Copy
                  </Menu.Item>
                  <Menu.Item onAction={handleOpen}>
                    <IconLayoutColumnRightsideFill />
                    Show theme
                  </Menu.Item>
                </Menu.Content>
              </Menu>
            </div>

            <GeneratedTheme />
          </div>
        </div>

        <Blocks />
        <React.Suspense fallback={<div>Loading...</div>}>
          <style>{generateTheme(selectedColors)}</style>
        </React.Suspense>
      </Container>

      <Sheet.Content
        onOpenChange={setOpen}
        isOpen={open}
        classNames={{ content: "bg-[#0e0e10] sm:max-w-md" }}
        side="right"
      >
        <Sheet.Header
          className="text-white *:text-white border-zinc-800"
          title="Theme"
          description="Copy the theme below and paste it into your CSS file."
        />
        <Sheet.Body className="border-y pb-4 border-zinc-800">
          <CodeHighlighter plain max96={false} className="pt-4" code={generateTheme(selectedColors)} />
        </Sheet.Body>
        <Sheet.Footer className="gap-x-1">
          <Sheet.Close
            onPress={handleClose}
            className="border-zinc-800 sm:flex hidden text-white data-pressed:border-zinc-700 data-pressed:bg-zinc-800 data-hovered:border-zinc-700 data-hovered:bg-zinc-900"
          >
            Close
          </Sheet.Close>
          <Button
            onPress={() => {
              copy()
              handleClose()
            }}
          >
            <IconDuplicate />
            Copy
          </Button>
        </Sheet.Footer>
      </Sheet.Content>
    </div>
  )
}
