import type { Metadata } from "next"
import { Container, Heading } from "ui"

export const metadata: Metadata = {
  title: "Navbar Inset"
}
export default function Page() {
  return (
    <Container className="py-6 sm:py-12">
      <Heading>iPad</Heading>
    </Container>
  )
}
