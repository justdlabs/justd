import React from 'react'

import { useQueryString } from 'hooks/use-query-string'
import { IconBullet, IconBulletFill } from 'justd-icons'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from 'ui'

import type { SearchParamsProps } from '../icons-list'
import { Install } from './install'
import { Search } from './search'
import { SelectSize } from './select-size'

export function Controller({ searchParams }: SearchParamsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = searchParams
  const [isSelected, setSelected] = React.useState<'solid' | 'regular'>(
    (t as 'solid' | 'regular') || 'regular'
  )

  const { createQueryString } = useQueryString()

  const onFilter = (type: 'solid' | 'regular') => {
    router.push(pathname + '?' + createQueryString('t', type), {
      scroll: false
    })
    setSelected(type)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-6 sm:mb-12">
      <Install />
      <div className="flex gap-2 items-center">
        <Search />
        <Button
          aria-label={`Change filter to ${isSelected === 'solid' ? 'regular' : 'solid'}`}
          appearance="outline"
          className="size-10"
          size="square-petite"
          onPress={() => onFilter(isSelected === 'solid' ? 'regular' : 'solid')}
        >
          {isSelected === 'solid' ? <IconBulletFill /> : <IconBullet />}
        </Button>
        <SelectSize />
      </div>
    </div>
  )
}
