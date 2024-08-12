import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemDetails,
  ContextMenuTrigger
} from 'ui'

export default function ContextMenuItemDetailsDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent items={roles}>
        {(item) => (
          <ContextMenuItem id={item.id} textValue={item.name}>
            <ContextMenuItemDetails label={item.name} description={item.description} />
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  )
}

const roles = [
  { id: 1, name: 'Admin', description: 'Has full access to all resources' },
  { id: 2, name: 'Editor', description: 'Can edit content but has limited access to settings' },
  { id: 3, name: 'Viewer', description: 'Can view content but cannot make changes' },
  { id: 4, name: 'Contributor', description: 'Can contribute content for review' },
  { id: 5, name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]
