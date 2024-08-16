'use client'

import { LoginForm } from './blocks/login-form'
import { RangeCalendarBlocks } from '@/app/(app)/themes/blocks/range-calendar-blocks'
import { Buttons } from '@/app/(app)/themes/blocks/buttons'


export function Blocks() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <LoginForm />
      <RangeCalendarBlocks />
      <Buttons />
    </div>
  )
}
