import * as React from "react"

import type { FilteredColors } from "@/app/(app)/colors/(colors)/color-palette"
import { getTextColor } from "@/resources/lib/colors"
import { formatHex, formatHsl, formatRgb, parse } from "culori"
import { IconCheck, IconChevronLgDown, IconDuplicate } from "justd-icons"
import type { Selection } from "react-aria-components"
import { ListBox, ListBoxItem } from "react-aria-components"
import { toast } from "sonner"
import { twJoin } from "tailwind-merge"
import { Button, Menu } from "ui"

interface ColorItemProps {
  color: FilteredColors[0]
}

export function ColorItem({ color }: ColorItemProps) {
  const [selectedFormat, setSelectedFormat] = React.useState<Selection>(new Set(["oklch"]))
  const [copiedShade, setCopiedShade] = React.useState<string | null>(null)

  const handleCopy = (color: string, colorName: string, shade: string) => {
    const _selectedFormat = [...selectedFormat].join(", ")

    let formattedColor: string = color

    switch (_selectedFormat) {
      case "rgb":
        formattedColor = formatRgb(parse(color)) || color
        break
      case "hsl":
        formattedColor = formatHsl(parse(color)) || color
        break
      case "hex":
        formattedColor = formatHex(parse(color)) || color
        break
      case "oklch":
      default:
        formattedColor = color
        break
    }

    navigator.clipboard.writeText(formattedColor).then(() => {
      toast(`Copied: ${formattedColor}`)
      setCopiedShade(shade)
    })
  }

  React.useEffect(() => {
    if (copiedShade) {
      const timeout = setTimeout(() => {
        setCopiedShade(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [copiedShade])

  return (
    <div
      className={twJoin(
        "p-6",
        "border-b last:border-b-0 lg:nth-last-2:border-b-0 lg:border-r lg:last:border-r-0",
        "even:lg:border-r-0 even:pl-6 pb-6"
      )}
    >
      <div className="flex justify-between mb-4 items-center">
        <div className="font-mono text-sm uppercase">{color.name}</div>
        <div>
          <SelectFormat selected={selectedFormat} setSelected={setSelectedFormat} />
        </div>
      </div>
      <ListBox
        aria-label="Colors"
        orientation="horizontal"
        className="flex flex-wrap sm:flex-nowrap gap-2"
      >
        {color.children.map((child) => (
          <ListBoxItem
            textValue={child.shade}
            onAction={() => handleCopy(child.color, color.name, child.shade)}
            key={child.shade}
            className="flex relative group cursor-pointer focus:outline-hidden min-w-10 inset-shadow-xs inset-shadow-white/15 data-focused:ring-white/25 ring-inset ring-1 ring-white/10 items-end text-xs font-mono justify-center p-2 gap-x-2 w-1/7 sm:w-full rounded-lg h-20 *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:opacity-90 *:data-[slot=icon]:size-3.5 *:data-[slot=icon]:mx-auto *:data-[slot=icon]:group-data-focus-visible:block *:data-[slot=icon]:group-data-hovered:block *:data-[slot=icon]:hidden"
            style={{
              color: getTextColor(child.color),
              backgroundColor: child.color
            }}
          >
            {copiedShade === child.shade ? <IconCheck /> : <IconDuplicate />}
            {child.shade}
          </ListBoxItem>
        ))}
      </ListBox>
    </div>
  )
}

interface SelectedFormatProps {
  selected: Selection
  setSelected: (s: Selection) => void
}

function SelectFormat({ selected, setSelected }: SelectedFormatProps) {
  return (
    <Menu>
      <Button appearance="outline" className="uppercase w-32 justify-between font-mono">
        {[...selected].join(", ")}
        <IconChevronLgDown className="ml-1" />
      </Button>
      <Menu.Content
        placement="bottom right"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        selectionMode="single"
      >
        <Menu.Radio id="rgb">RGB</Menu.Radio>
        <Menu.Radio id="hsl">HSL</Menu.Radio>
        <Menu.Radio id="oklch">OKLCH</Menu.Radio>
        <Menu.Radio id="hex">HEX</Menu.Radio>
      </Menu.Content>
    </Menu>
  )
}
