import { Cta } from "@/components/cta"
import { Hero } from "@/components/hero"
import { Resources } from "@/components/resources"
import { Container } from "ui"

export default function Page() {
  return (
    <>
      <Hero />
      <Container className="space-y-16 py-6 sm:py-16">
        <Resources />
      </Container>
      <Cta />
    </>
  )
}
