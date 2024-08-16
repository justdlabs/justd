import { Blocks } from "@/components/blocks"
import { Cta } from "@/components/cta"
import { Hero } from "@/components/hero"
import { Resources } from "@/components/resources"
import { Container } from "ui"

export default function Page() {
  return (
    <>
      <Hero />
      <Container className="py-6 space-y-16 sm:py-16">
        <Blocks />
        <Resources />
      </Container>
      <Cta />
    </>
  )
}
