import { docs } from "@/.velite"
import { notFound, redirect } from "next/navigation"

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  const originalUrl = docs.map((i) => i.slug).find((i) => i.split("/").pop() === params.slug)
  if (!originalUrl) {
    notFound()
  }

  return redirect(`/${originalUrl}`)
}
