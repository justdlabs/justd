'use client'

import React from 'react'

import CommandControlledDemo from '@/components/docs/controls/command-controlled-demo'
import CommandDescriptionDemo from '@/components/docs/controls/command-description-demo'
import { Container } from '@/components/ui/container'

export default function App() {
  const [values, setValues] = React.useState<string[]>([])
  return (
    <Container className="py-24">
      <CommandControlledDemo />
      <CommandDescriptionDemo />
      {/*{JSON.stringify(values)}*/}
      {/*<div className="max-w-xl">*/}
      {/*  <ComboBox*/}
      {/*    formValue="text"*/}
      {/*    onSelectionChange={(value) => {*/}
      {/*      if (value) {*/}
      {/*        setValues([...values, value as string])*/}
      {/*      }*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Label>Favorite Animal</Label>*/}
      {/*    <div>*/}
      {/*      <Input />*/}
      {/*      <Button>▼</Button>*/}
      {/*    </div>*/}
      {/*    <PopoverPicker className="max-h-72 max-w-[--trigger-width] min-w-[--trigger-width] overflow-y-auto">*/}
      {/*      <ListBoxPicker selectionMode="multiple" items={options}>*/}
      {/*        {(option) => (*/}
      {/*          <ListBoxItem className="flex items-center justify-between">*/}
      {/*            {({ isSelected }) => (*/}
      {/*              <>*/}
      {/*                {option.name}*/}
      {/*                {isSelected && <IconCheck />}*/}
      {/*              </>*/}
      {/*            )}*/}
      {/*          </ListBoxItem>*/}
      {/*        )}*/}
      {/*      </ListBoxPicker>*/}
      {/*    </PopoverPicker>*/}
      {/*  </ComboBox>*/}
      {/*</div>*/}
    </Container>
  )
}

const options = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
  { id: 9, name: 'Ivy Gourd' },
  { id: 10, name: 'Jackfruit' },
  { id: 11, name: 'Kiwi' },
  { id: 12, name: 'Lemon' },
  { id: 13, name: 'Mango' },
  { id: 14, name: 'Nectarine' },
  { id: 15, name: 'Orange' },
  { id: 16, name: 'Papaya' },
  { id: 17, name: 'Quince' },
  { id: 18, name: 'Raspberry' },
  { id: 19, name: 'Strawberry' },
  { id: 20, name: 'Tangerine' }
]
