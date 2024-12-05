"use client"

import * as React from "react"

import { Blocks } from "@/app/(app)/themes/partials/blocks"
import { ThemeCustomizer } from "@/app/(app)/themes/partials/theme-customizer"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { IconBrandCss, IconDuplicate } from "justd-icons"
import { toast } from "sonner"
import { Button, Container, Heading, Sheet } from "ui"

import { generateTheme } from "./themes"

export function ThemeContainer() {
  const [selectedColors, setSelectedColors] = React.useState({
    primary: "blue",
    gray: "zinc",
    accent: "blue"
  })

  const copy = () => {
    navigator.clipboard.writeText(generateTheme(selectedColors))
    toast(`Copied to clipboard.`)
  }
  return (
    <div className="py-4 sm:py-16">
      <Container>
        <div className="mb-2 bg-secondary/15 border rounded-xl p-6">
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end gap-4 mb-6">
            <div>
              <Heading level={2}>Theme Customizer</Heading>
              <p className="text-muted-fg text-sm">
                Customize your theme by selecting colors from the color picker or by entering a hex code.
              </p>
            </div>
            <Sheet>
              <Button>
                <IconBrandCss />
                Get Theme
              </Button>
              <Sheet.Content classNames={{ content: "bg-[#0e0e10] sm:max-w-md" }} side="right">
                {(values) => (
                  <>
                    <Sheet.Header
                      className="text-white *:text-white border-zinc-800"
                      title="Theme"
                      description="Copy the theme below and paste it into your CSS file."
                    />
                    <Sheet.Body className="border-y pb-4 border-zinc-800">
                      <CodeHighlighter plain max96={false} className="pt-4" code={generateTheme(selectedColors)} />
                    </Sheet.Body>
                    <Sheet.Footer className="gap-x-1">
                      <Sheet.Close className="border-zinc-800 sm:flex hidden text-white data-pressed:border-zinc-700 data-pressed:bg-zinc-800 data-hovered:border-zinc-700 data-hovered:bg-zinc-900">
                        Close
                      </Sheet.Close>
                      <Button
                        onPress={() => {
                          copy()
                          values.state.close()
                        }}
                      >
                        <IconDuplicate />
                        Copy
                      </Button>
                    </Sheet.Footer>
                  </>
                )}
              </Sheet.Content>
            </Sheet>
          </div>
          <ThemeCustomizer {...{ selectedColors, setSelectedColors }} />
        </div>
        <Blocks />
        <React.Suspense fallback={<div>Loading...</div>}>
          <style>{generateTheme(selectedColors)}</style>
        </React.Suspense>
      </Container>
    </div>
  )
}
