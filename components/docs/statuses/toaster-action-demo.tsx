import { toast } from 'sonner'
import { Button } from 'ui'

export default function ToasterActionDemo() {
  return (
    <div className="flex gap-3">
      <Button
        appearance="outline"
        size="small"
        onPress={() =>
          toast('New comment on your post!', {
            action: {
              label: 'View',
              onClick: () => alert('Viewed')
            }
          })
        }
      >
        Action
      </Button>
      <Button
        appearance="outline"
        size="small"
        onPress={() =>
          toast('New comment on your post!', {
            cancel: {
              label: 'Cancel',
              onClick: () => alert('Cancelled')
            }
          })
        }
      >
        Cancel
      </Button>
    </div>
  )
}
