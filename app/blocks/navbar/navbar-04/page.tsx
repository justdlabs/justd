import type { Metadata } from "next"
import { Container, Heading } from "ui"

export const metadata: Metadata = {
  title: "Basic Navbar"
}
export default function Page() {
  return (
    <Container className="py-6 sm:py-12">
      <Heading>iPhone</Heading>
    </Container>
  )
}
