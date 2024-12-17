import { Blocks } from "./partials/blocks"
import { Cta } from "./partials/cta"
import { Hero } from "./partials/hero"
import { Icon } from "./partials/icon"
import { Resources } from "./partials/resources"

export default function Page() {
  return (
    <>
      <Hero />
      <div className="py-6 space-y-16 lg:py-16">
        <Blocks />
        <Icon />
        <Resources />
      </div>
      <Cta />
    </>
  )
}
