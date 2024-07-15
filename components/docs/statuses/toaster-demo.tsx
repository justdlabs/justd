import { toast } from 'sonner'
import { Button } from 'ui'

export default function ToasterDemo() {
  return (
    <Button
      onPress={() => toast('The registration is successful, click here to continue.')}
    >
      Show Toast
    </Button>
  )
}
