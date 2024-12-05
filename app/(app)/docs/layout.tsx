import React, { type ReactNode } from "react"

import { Aside } from "@/components/aside"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mx-auto flex w-full lg:max-w-(--breakpoint-2xl) flex-auto justify-center lg:px-6">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="sticky top-[calc(var(--spacing)*15.1)] -ml-0.5 w-64 dark:scheme-dark [scrollbar-width:thin] h-screen overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-0 xl:w-64">
            <Aside />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
