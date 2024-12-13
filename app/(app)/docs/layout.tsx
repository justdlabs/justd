import type { ReactNode } from "react"

import { Aside } from "@/components/aside"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex relative flex-auto justify-center mx-auto w-full lg:px-6 lg:max-w-(--breakpoint-2xl)">
        <div className="hidden lg:block lg:relative lg:flex-none">
          <div className="-ml-0.5 sticky top-[calc(var(--spacing)*15.1)] h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-0 pl-0.5 xl:w-60">
            <Aside />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
