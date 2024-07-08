'use client'

import { Avatar, ComboBox, ComboBoxItem } from 'ui'

const users = [
  { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
  //...
]
export default function ComboBoxInvalidDemo() {
  return (
    <ComboBox placeholder="Select a user" label="Users" isRequired items={users}>
      {(item) => (
        <ComboBoxItem key={item.id} id={item.id} textValue={item.name}>
          <Avatar src={item.image_url} />
          {item.name}
        </ComboBoxItem>
      )}
    </ComboBox>
  )
}
