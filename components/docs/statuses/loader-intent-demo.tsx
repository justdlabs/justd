import { Loader } from 'ui'

export default function LoaderIntentDemo() {
  return (
    <div className="flex gap-6">
      <Loader variant="hot" intent="current" />
      <Loader variant="hot" intent="primary" />
      <Loader variant="hot" intent="secondary" />
      <Loader variant="hot" intent="success" />
      <Loader variant="hot" intent="warning" />
      <Loader variant="hot" intent="danger" />
    </div>
  )
}
