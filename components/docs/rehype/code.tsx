"use client"

import React, { useEffect, useState } from "react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { AnimatePresence, motion } from "framer-motion"
import { IconCheck, IconChevronLgDown, IconCircleInfo, IconDuplicate } from "justd-icons"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { twJoin } from "tailwind-merge"
import { Button, ButtonPrimitive, type ButtonProps, cn } from "ui"
import { unified } from "unified"
import { copyToClipboard } from "usemods"

export const snippetVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
}

export interface CodeProps {
  lang?: string
  code: string
  withImportCopy?: boolean
  className?: string
}

function Code({ className, lang = "tsx", code, withImportCopy = true }: CodeProps) {
  const [copied, setCopied] = React.useState<string>("")

  function copyImportsToClipboard(): void {
    const importRegex = /import[\s\S]+?from\s+['"][\s\S]+?['"];?\n*/g
    const _imports = code.match(importRegex) || []
    const imports = _imports.map((importStatement: string) => importStatement.trim()).join("\n")
    copyToClipboard(imports)
      .then(() => {
        setCopied("imports")
        setTimeout(() => setCopied(""), 2000)
      })
      .catch((err) => console.error("Copy failed: ", err))
  }

  return (
    <div
      className={cn(
        "dfakdpxe2941 not-prose group relative max-h-96 overflow-y-auto rounded-lg font-mono text-sm",
        className
      )}
    >
      <div className="relative -mt-6">
        <div className="sticky top-3 right-3 mr-3 z-20 flex gap-1.5 justify-end">
          {withImportCopy && (
            <CopyButton
              ariaLabel="Copy imports statement"
              initialIcon={<IconCircleInfo />}
              isCopied={copied === "imports"}
              onPress={copyImportsToClipboard}
            />
          )}
          <CopyRawButton code={code} />
        </div>
        <div className="overflow-x-auto">
          <CodeHighlighter lang={lang} code={code} />
        </div>
      </div>
    </div>
  )
}

function CodeContainer({ children, isOpened }: { children: React.ReactNode; isOpened: boolean }) {
  return (
    <CollapsibleContent forceMount className={!isOpened ? "max-h-32" : ""}>
      <div
        className={cn(
          "[&_pre]:my-0 [&_pre]:!border-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px]",
          !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto"
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

function CodeExpandButton({ isOpened }: { isOpened: boolean }) {
  return (
    <div
      className={cn(
        "absolute flex items-center z-10 justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black",
        isOpened ? "inset-x-0 bottom-0 h-16" : "inset-0"
      )}
    >
      <CollapsibleTrigger asChild>
        <ButtonPrimitive className="bg-zinc-700 text-white px-4 border border-zinc-600 py-2 rounded-lg flex items-center gap-x-2 text-sm focus:outline-none">
          <IconChevronLgDown
            className={twJoin(
              "size-4 -ml-1 duration-200 transition-colors",
              isOpened && "rotate-180"
            )}
          />
          {isOpened ? "Collapse" : "Expand"}
        </ButtonPrimitive>
      </CollapsibleTrigger>
    </div>
  )
}

interface CodeCollapsibleProps {
  isOpened: boolean
  onOpenChange: (open: boolean) => void
  lang?: string
  withImportCopy?: boolean
  code: string
}

function CodeCollapsible({
  isOpened,
  onOpenChange,
  lang = "tsx",
  withImportCopy = true,
  code,
  ...props
}: React.PropsWithChildren<CodeCollapsibleProps>) {
  return (
    <Collapsible open={isOpened} onOpenChange={onOpenChange}>
      <div className={"relative overflow-hidden"} {...props}>
        <CodeContainer isOpened={isOpened}>
          <Code code={code} lang={lang} withImportCopy={withImportCopy} />
        </CodeContainer>
        <CodeExpandButton isOpened={isOpened} />
      </div>
    </Collapsible>
  )
}

export function CodeCollapsibleRoot({ children }: React.PropsWithChildren<object>) {
  return (
    <div className="overflow-hidden border border-zinc-800 bg-[#0e0e10] rounded-lg">{children}</div>
  )
}

export function CopyRawButton({ code }: { className?: string; code: string }) {
  const [copied, setCopied] = React.useState<string>("")
  const copyRaw = () => {
    copyToClipboard(code)
      .then(() => {
        setCopied("raw")
        setTimeout(() => setCopied(""), 2000)
      })
      .catch((err) => {
        console.error("Copy failed: ", err)
      })
  }
  return <CopyButton ariaLabel="Copy raw code" isCopied={copied === "raw"} onPress={copyRaw} />
}

const CodeHighlighter = ({ lang = "tsx", code, ...props }: CodeProps) => {
  const [formattedCode, setFormattedCode] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const processCode = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypePrettyCode, {
            keepBackground: false,
            theme: "vesper",
            defaultLang: {
              block: lang,
              inline: "plaintext"
            }
          })
          .use(rehypeStringify, { allowDangerousHtml: true })
          .process(`\`\`\`${lang}\n${code}\n\`\`\``)
        setFormattedCode(String(file))
      } catch (err) {
        setError("Failed to process code. Please check the configuration.")
        console.error(err)
      }
    }

    processCode().then((r) => r)
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return <div {...props} dangerouslySetInnerHTML={{ __html: formattedCode }} />
}

interface CopyButtonProps extends ButtonProps {
  isCopied?: boolean
  ariaLabel?: string
  initialIcon?: React.ReactNode
  copiedIcon?: React.ReactNode
  className?: string
}

const CopyButton = ({
  initialIcon,
  copiedIcon,
  ariaLabel = "Copy",
  isCopied,
  className,
  ...props
}: CopyButtonProps) => {
  return (
    <Button
      className={cn(
        "size-7 backdrop-blur-lg rounded-md text-white bg-zinc-800 border hover:bg-zinc-700 border-zinc-700",
        className
      )}
      aria-label={ariaLabel}
      size="square-petite"
      appearance="outline"
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="checkmark-import"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {copiedIcon ?? <IconCheck />}
          </motion.span>
        ) : (
          <motion.span
            key="copy-import"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {initialIcon ?? <IconDuplicate />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}

export { CodeHighlighter, CodeContainer, CodeExpandButton, CodeCollapsible, Code }
