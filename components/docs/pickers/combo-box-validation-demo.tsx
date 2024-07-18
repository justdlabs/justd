'use client'

import { Avatar, Button, ComboBox, ComboBoxItem, Form } from 'ui'

const users = [
  { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
  //...
]
export default function ComboBoxValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <ComboBox placeholder="Select a user" label="Users" isRequired items={users}>
        {(item) => (
          <ComboBoxItem key={item.id} id={item.id} textValue={item.name}>
            <Avatar src={item.image_url} />
            {item.name}
          </ComboBoxItem>
        )}
      </ComboBox>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
