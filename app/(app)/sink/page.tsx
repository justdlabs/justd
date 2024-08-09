'use client'

import ButtonIconDemo from '@/components/docs/buttons/button-icon-demo'
import ButtonIntentDemo from '@/components/docs/buttons/button-intent-demo'
import { parseColor } from '@react-stately/color'
import { IconBrandAppstore, IconBrandLaravel } from 'justd-icons'
import colors from 'tailwindcss/colors'
import { Button } from 'ui'

export default function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center gap-10">
        <div className="flex gap-2">
          <Button intent="danger">
            <IconBrandAppstore />
            Danger
          </Button>
          <Button intent="success">
            <IconBrandAppstore />
            Success
          </Button>
          <Button intent="warning">
            <IconBrandAppstore />
            Warning
          </Button>
          <Button intent="secondary">
            <IconBrandAppstore />
            Secondary
          </Button>
          <Button intent="primary">
            <IconBrandAppstore />
            Primary
          </Button>
          <Button intent="light">
            <IconBrandAppstore />
            Light
          </Button>
          <Button intent="dark">
            <IconBrandAppstore />
            Dark
          </Button>
          <Button intent="light/dark">
            <IconBrandAppstore />
            Lida
          </Button>
          <Button intent="info">
            <IconBrandAppstore />
            Info
          </Button>
        </div>
        <div className="flex">
          <ButtonIntentDemo />
        </div>
      </div>
    </div>
  )
}
