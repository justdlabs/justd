'use client'

import { Avatar, ComboBox } from '@/components/ui'

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
    //...
]
export default function ComboBoxDisabledDemo() {
    return (
        <ComboBox
            placeholder='Select a user'
            isDisabled
            label='Users'
            isRequired
            items={users}
        >
            {(item) => (
                <ComboBox.Item key={item.id} id={item.id} textValue={item.name}>
                    <Avatar src={item.image_url} />
                    {item.name}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}
