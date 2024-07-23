'use client'

import React from 'react'

import ButtonDisabledDemo from '@/components/docs/buttons/button-disabled-demo'
import ButtonIntentDemo from '@/components/docs/buttons/button-intent-demo'
import TextFieldDemo from '@/components/docs/forms/text-field-demo'
import LinkDisabledDemo from '@/components/docs/navigation/link-disabled-demo'
import LinkIntentDemo from '@/components/docs/navigation/link-intent-demo'

export default function Page() {
  // @ts-ignore
  return (
    <div className="p-32">
      <TextFieldDemo />
      <ButtonDisabledDemo />
      <LinkDisabledDemo />
      <hr className="my-2" />
      <ButtonIntentDemo />
      <hr className="my-2" />
      <LinkIntentDemo />
    </div>
  )
}
