import { toast } from 'sonner'
import { Button } from 'ui'

export default function ToasterStatusDemo() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button appearance="outline" size="small" onPress={() => toast.error('The registration failed')}>
        Error
      </Button>
      <Button appearance="outline" size="small" onPress={() => toast.success('The registration was successful.')}>
        Success
      </Button>
      <Button appearance="outline" size="small" onPress={() => toast.warning('There was an issue during registration')}>
        Warning
      </Button>
      <Button
        appearance="outline"
        size="small"
        onPress={() => toast.info('Here is some information about your registration.')}
      >
        Info
      </Button>
    </div>
  )
}
