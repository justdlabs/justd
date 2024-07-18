'use client'

import { Button, Form, Select, SelectItem } from 'ui'

const software = [
  { id: 1, name: 'Adobe Photoshop' }
  //...
]

export default function SelectValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Select label="Design software" placeholder="Select a software" items={software} isRequired>
        {(item) => (
          <SelectItem id={item.id} textValue={item.name}>
            {item.name}
          </SelectItem>
        )}
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
