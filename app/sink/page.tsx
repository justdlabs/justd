import ModalDemo from '@/components/docs/overlays/modal-demo'
import { VisuallyHidden } from 'ui'

export default function Page() {
  return (
    <div className="p-32">
      <ModalDemo />
      <VisuallyHidden>This is a hidden element</VisuallyHidden>
    </div>
  )
}
