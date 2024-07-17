import TabsCollectionsDemo from '@/components/docs/navigation/tabs-collections-demo'
import TabsDisabledDemo from '@/components/docs/navigation/tabs-disabled-demo'
import TabsIconsDemo from '@/components/docs/navigation/tabs-icons-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <div className="p-6">
      <Container>
        <TabsCollectionsDemo />
      </Container>
    </div>
  )
}
