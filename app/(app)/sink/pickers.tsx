'use client'

import ComboBoxAvatarDemo from '@/components/docs/pickers/combo-box-avatar-demo'
import SelectDemo from '@/components/docs/pickers/select-demo'
import { Card } from 'ui'

export function Pickers() {
  return (
    <Card className="flex p-6 flex-col justify-center items-center gap-4">
      <SelectDemo />
      <ComboBoxAvatarDemo />
    </Card>
  )
}
