'use client'

import { Select, SelectItem, SelectItemDetails } from 'ui'

const roles = [
  { id: 1, name: 'Admin', description: 'Has full access to all resources' },
  { id: 2, name: 'Editor', description: 'Can edit content but has limited access to settings' },
  { id: 3, name: 'Viewer', description: 'Can view content but cannot make changes' },
  { id: 4, name: 'Contributor', description: 'Can contribute content for review' },
  { id: 5, name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]

export default function SelectItemDetailsDemo() {
  return (
    <Select label="Roles" placeholder="Select a role" items={roles}>
      {(item) => (
        <SelectItem id={item.id} textValue={item.name}>
          <SelectItemDetails label={item.name} description={item.description} />
        </SelectItem>
      )}
    </Select>
  )
}
