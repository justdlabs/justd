import { Container, Note } from 'ui'

export default function Page() {
  return (
    <div className="p-32">
      <Container className="max-w-xl space-y-6 min-h-screen relative">
        <Note intent="primary">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
        <Note intent="warning">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
        <Note intent="secondary">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
        <Note intent="info">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
        <Note intent="success">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
        <Note intent="danger">
          We hook you up with top-tier migration services in our startup plan. Wanna roll
          with it? Hit us up here.
        </Note>
      </Container>
    </div>
  )
}
