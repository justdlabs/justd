import { Blocks } from "./partials/blocks"
import { Cta } from "./partials/cta"
import { Hero } from "./partials/hero"
import { IconResources } from "./partials/icon-resources"
import { Resources } from "./partials/resources"

export default function Page() {
  return (
    <>
      <Hero />
      <div className="py-6 space-y-16 lg:py-16">
        <Blocks />
        <IconResources />
        <Resources />
      </div>
      <Cta />
    </>
  )
}
