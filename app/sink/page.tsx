import { Badge, Container } from 'ui'

export default function Page() {
  return (
    <div className="p-32">
      <Container className="space-x-6">
        <Badge intent="primary" shape="circle">
          Primary
        </Badge>
        <Badge intent="info" shape="circle">
          Info
        </Badge>
        <Badge intent="secondary" shape="circle">
          Info
        </Badge>
        <Badge intent="warning" shape="circle">
          Info
        </Badge>
        <Badge intent="danger" shape="circle">
          Info
        </Badge>
      </Container>
    </div>
  )
}
