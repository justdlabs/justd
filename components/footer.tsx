"use client"

import { siteConfig } from "@/resources/config/site"
import { IconBrandJustd } from "justd-icons"
import { Container, Link } from "ui"

const navigation = {
  starterKits: [
    { name: "Inertia.js", href: "https://github.com/justdlabs/inertia.ts/" },
    { name: "Next.js", href: "https://next.getjustd.com/" },
    { name: "Remix", href: "https://remix.getjustd.com/" },
    { name: "Astro", href: "https://astro.getjustd.com/" },
  ],
  resources: [
    { name: "Icons", href: "/icons" },
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "/themes" },
    { name: "Blocks", href: "/blocks" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
  ],
  labs: [
    { name: "Github", href: "https://github.com/justdlabs" },
    { name: "X / Formerly Twitter", href: "https://x.com/intent/follow?screen_name=irsyadadl" },
    { name: "CLI", href: "https://github.com/justdlabs/cli" },
    { name: "Templates", href: "https://irsyad.co/templates" },
  ],
  legal: [{ name: "MIT", href: "https://github.com/justdlabs/justd/blob/main/LICENSE" }],
}

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t text-bg-fg">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative z-20 py-16 px-6 mx-auto max-w-7xl sm:py-24 lg:px-8 lg:pt-16 lg:pb-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <IconBrandJustd className="size-7" />
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Resources</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-fg data-hovered:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Starter Kits</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.starterKits.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg data-hovered:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Labs</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.labs.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg data-hovered:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg data-hovered:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden relative z-10 flex-col justify-center items-center -mt-28 -mb-20 text-center sm:-mt-32 h-[14rem]">
        <div className="absolute w-full h-32 sm:w-1/2 lg:w-1/4 bg-linear-to-b dark:from-bg dark:via-fg dark:to-bg dark:blur-xl" />
        <strong className="inline-flex relative z-10 font-bold leading-none dark:bg-clip-text from-bg to-muted text-[7rem] text-fg sm:text-[10rem] dark:bg-linear-to-b dark:text-bg dark:[text-shadow:1px_1px_0_var(--fg),_-1px_-1px_0_var(--fg),_1px_-1px_0_var(--fg),_-1px_1px_0_var(--fg),_1px_0_0_var(--fg),_-1px_0_0_var(--fg),_0_1px_0_var(--fg),_0_-1px_0_var(--fg)]">
          JUSTD
        </strong>
      </div>

      <Container className="relative z-20 space-y-1.5 border-t bg-bg py-6 text-center text-muted-fg text-sm **:[a]:font-semibold **:[a]:text-fg **:[strong]:font-semibold **:[strong]:text-fg">
        <p>
          <strong>{siteConfig.name} &trade; 2024</strong> - This project’s crafted with{" "}
          <span className="text-pink-500 font-[ui-sans-serif,-apple-system,system-ui]">♥</span> by{" "}
          <Link href="https://twitter.com/irsyadadl">Irsyad</Link>. Peep the Source Code on{" "}
          <Link href={siteConfig.repo}>GitHub</Link>.
        </p>

        <p>
          Cooked up with{" "}
          <Link href="https://nextjs.org" target="_blank">
            Next.js
          </Link>
          ,
          <Link href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Link>
          , and{" "}
          <Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
            RAC
          </Link>
          .
        </p>
        <p>
          Hosted on{" "}
          <Link href="https://vercel.com" target="_blank">
            Vercel
          </Link>
          . The source code's got the <Link href="https://github.com/justdlabs/justd/blob/main/LICENSE">MIT</Link>{" "}
          license.
        </p>
      </Container>
    </footer>
  )
}
