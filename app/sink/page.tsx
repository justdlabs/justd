'use client'

import { Input, TagField, TextField } from 'ui'
import TextareaDemo from '@/components/docs/forms/textarea/textarea-demo'
import SelectDemo from '@/components/docs/pickers/select/select-demo'
import ComboBoxDemo from '@/components/docs/pickers/combo-box/combo-box-demo'
import TagFieldDemo from '@/components/docs/forms/tag-field/tag-field-demo'
import MultipleSelectDemo from '@/components/docs/pickers/multiple-select/multiple-select-demo'
import DateFieldDemo from '@/components/docs/date-and-time/date-field/date-field-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker/date-picker-demo'
import ColorFieldDemo from '@/components/docs/colors/color-field/color-field-demo'
import TimeFieldDemo from '@/components/docs/date-and-time/time-field/time-field-demo'
import SearchFieldDemo from '@/components/docs/forms/search-field/search-field-demo'
import TextFieldPendingDemo from '@/components/docs/forms/text-field/text-field-pending-demo'

export default function Page() {
  return (
    <div className="p-32 grid gap-6 grid-cols-3">
      <TextField label='Email' placeholder='Enter your email' />
      <TextField type='password' label='Password' placeholder='Enter your password' isRevealable />
      <TextareaDemo/>
      <SelectDemo/>
      <ComboBoxDemo/>
      <Input/>
      <TagFieldDemo/>
      <MultipleSelectDemo/>
      <DateFieldDemo/>
      <DatePickerDemo/>
      <ColorFieldDemo/>
      <TimeFieldDemo/>
      <SearchFieldDemo/>
      <TextFieldPendingDemo/>
    </div>
  )
}
