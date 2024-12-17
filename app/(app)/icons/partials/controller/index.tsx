import { useState } from "react"

import { useQueryString } from "hooks/use-query-string"
import { IconBullet, IconBulletFill } from "justd-icons"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "ui"

import type { SearchParamsProps } from "../icons-list"
import { Install } from "./install"
import { Search } from "./search"
import { SelectSize } from "./select-size"

export function Controller({ searchParams }: SearchParamsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = searchParams
  const [isSelected, setSelected] = useState<"solid" | "regular">(
    (t as "solid" | "regular") || "regular",
  )

  const { createQueryString } = useQueryString()

  const onFilter = (type: "solid" | "regular") => {
    router.push(`${pathname}?${createQueryString("t", type)}`, {
      scroll: false,
    })
    setSelected(type)
  }

  return (
    <div className="z-10 lg:sticky lg:top-20">
      <div className="relative">
        <div className="flex relative z-20 flex-col gap-2 justify-between items-center mb-6 sm:flex-row sm:mb-12">
          <Install />
          <div className="flex gap-2 items-center">
            <Search />
            <Button
              aria-label={`Change filter to ${isSelected === "solid" ? "regular" : "solid"}`}
              appearance="outline"
              className="size-10"
              size="square-petite"
              onPress={() => onFilter(isSelected === "solid" ? "regular" : "solid")}
            >
              {isSelected === "solid" ? <IconBulletFill /> : <IconBullet />}
            </Button>
            <SelectSize />
          </div>
        </div>

        <div className="hidden absolute inset-x-0 top-0 z-0 -mt-5 h-24 to-transparent pointer-events-none md:block bg-linear-to-b from-bg via-bg/90" />
      </div>
    </div>
  )
}
