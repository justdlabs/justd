import { Container } from 'ui'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container className="py-16">{children}</Container>
}
