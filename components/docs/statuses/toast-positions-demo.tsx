import { toast, type ToastT } from 'sonner'
import { Button } from 'ui'

const positions: ToastT['position'][] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center'
]

export default function ToastPositionsDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {positions.map((position) => (
        <Button
          appearance="outline"
          size="small"
          key={position}
          onPress={() => toast('The registration is successful, click here to continue.', { position })}
        >
          {position}
        </Button>
      ))}
    </div>
  )
}
