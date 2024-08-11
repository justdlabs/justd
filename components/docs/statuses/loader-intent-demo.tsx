import { Loader } from 'ui'

export default function LoaderIntentDemo() {
  return (
    <div className="flex gap-6">
      <Loader variant='hot' size='medium' intent="current" />
      <Loader variant='hot' size='medium' intent="primary" />
      <Loader variant='hot' size='medium' intent="secondary" />
      <Loader variant='hot' size='medium' intent="success" />
      <Loader variant='hot' size='medium' intent="warning" />
      <Loader variant='hot' size='medium' intent="danger" />
    </div>
  )
}
