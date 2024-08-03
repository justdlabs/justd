'use client'

import ListBoxSectionDemo from '@/components/docs/collections/list-box-section-demo'
import MenuSectionDemo from '@/components/docs/collections/menu-section-demo'
import ComboBoxSectionDemo from '@/components/docs/pickers/combo-box-section-demo'
import SelectSectionDemo from '@/components/docs/pickers/select-section-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-4 items-start gap-4">
        <MenuSectionDemo />
        <ListBoxSectionDemo />
        <ComboBoxSectionDemo />
        <SelectSectionDemo />
      </div>
    </Container>
  )
}
