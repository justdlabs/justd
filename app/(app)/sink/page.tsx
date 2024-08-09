'use client'

import ButtonIconDemo from '@/components/docs/buttons/button-icon-demo'
import ButtonIntentDemo from '@/components/docs/buttons/button-intent-demo'
import BadgeIntentDemo from '@/components/docs/statuses/badge-intent-demo'
import { parseColor } from '@react-stately/color'
import { IconBrandAppstore, IconBrandLaravel } from 'justd-icons'
import colors from 'tailwindcss/colors'
import { Button } from 'ui'

export default function Page() {
  return (
    <div>
      <BadgeIntentDemo />
    </div>
  )
}
