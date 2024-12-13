import { useState } from "react"

import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn, IconCheck, IconDuplicate } from "justd-icons"
import { Button, Menu } from "ui"
import { copyToClipboard } from "usemods"

type Tool = "Bun" | "Yarn" | "PNPM" | "NPM"

export function Install({ pkg = "justd-icons" }: { pkg?: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const [command, setCommand] = useState("")
  const commandArgs = pkg

  const installMap: Record<Tool, string> = {
    Bun: "bun add",
    Yarn: "yarn add",
    PNPM: "pnpm add",
    NPM: "npm i",
  }

  const handleCopy = (tool: Tool) => {
    const newCommand = `${installMap[tool]} ${commandArgs}`
    setCommand(newCommand)
    copyToClipboard(newCommand).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="[&_.xd]:-mt-px xd flex h-10 w-full items-center justify-between rounded-lg border p-1 pl-3 font-mono text-sm tracking-tighter sm:min-w-72 sm:max-w-72 [&_.xd]:mr-[-0.30rem]">
      {command || "npm i justd-icons"}
      <Menu>
        <Button size="square-petite" appearance="outline" className="size-7 rounded-md" aria-label="Copy npm command">
          {isCopied ? <IconCheck /> : <IconDuplicate />}
        </Button>
        <Menu.Content showArrow placement="bottom end">
          <Menu.Item onAction={() => handleCopy("NPM")}>
            <IconBrandNpm />
            NPM
          </Menu.Item>
          <Menu.Item onAction={() => handleCopy("Bun")}>
            <IconBrandBun />
            Bun
          </Menu.Item>
          <Menu.Item onAction={() => handleCopy("Yarn")}>
            <IconBrandYarn />
            Yarn
          </Menu.Item>
          <Menu.Item onAction={() => handleCopy("PNPM")}>
            <IconBrandPnpm />
            PNPM
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}
