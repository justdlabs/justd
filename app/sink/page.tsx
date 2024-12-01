"use client"

import { CodeSandbox } from "@/components/code-sandbox"

export default function Page() {
  return (
    <div>
      <CodeSandbox
        source={{
          page: "blocks/navbar/navbar-01/page",
          layout: "blocks/navbar/navbar-01/layout",
          "app-navbar": "blocks/navbar/navbar-01/app-navbar"
        }}
      />
    </div>
  )
}
