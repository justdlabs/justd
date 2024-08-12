import { IconBrandGithub, IconBrandThreads, IconBrandX } from 'justd-icons'
import { Button, Card, Link, ShowMore } from 'ui'

export function LoginSocial() {
  return (
    <Card>
      <Card.Header className="text-center">Log in</Card.Header>
      <Card.Content className="flex flex-col gap-y-3">
        <Button shape="circle" size="large" intent="dark">
          <IconBrandGithub />
          Continue with Github
        </Button>
        <Button shape="circle" size="large" intent="light/dark">
          <IconBrandX />
          Continue with X
        </Button>
        <Button shape="circle" size="large" intent="light/dark">
          <IconBrandThreads />
          Continue with Threads
        </Button>

        <ShowMore className="my-4" as="text" text="Or" />

        <Button shape="circle" size="large" appearance="outline">
          Continue with SAML SSO
        </Button>
        <Button shape="circle" size="large" appearance="outline">
          Continue with Passkey
        </Button>
      </Card.Content>
      <Card.Footer className="justify-center">
        <Link intent="primary" href="#">
          Continue with Email
        </Link>
      </Card.Footer>
    </Card>
  )
}
