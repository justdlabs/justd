import type { Metadata } from "next"
import { Heading } from "ui"

export const metadata: Metadata = {
  title: "Navbar Default"
}

export default function Page() {
  return <Heading>Home</Heading>
}
