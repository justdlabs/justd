import { Loader } from '@/components/ui/loader'

export default function LoaderIntentDemo() {
  return (
    <div className="flex gap-6">
      <Loader intent="current" />
      <Loader intent="primary" />
      <Loader intent="secondary" />
      <Loader intent="success" />
      <Loader intent="warning" />
      <Loader intent="danger" />
    </div>
  )
}
