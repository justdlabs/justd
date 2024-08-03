'use client'

import { ListBox, ListBoxItem, ListBoxItemDetails } from 'ui'

export default function ListBoxItemDetailsDemo() {
  return (
    <ListBox items={roles} aria-label="Bands">
      {(item) => (
        <ListBoxItem id={item.id}>
          <ListBoxItemDetails label={item.name} description={item.description} />
        </ListBoxItem>
      )}
    </ListBox>
  )
}

const roles = [
  { id: 1, name: 'Admin', description: 'Has full access to all resources' },
  { id: 2, name: 'Editor', description: 'Can edit content but has limited access to settings' },
  { id: 3, name: 'Viewer', description: 'Can view content but cannot make changes' },
  { id: 4, name: 'Contributor', description: 'Can contribute content for review' },
  { id: 5, name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]
