"use client"

import { siteConfig } from "@/resources/config/site"
import { IconBrandGithub } from "justd-icons"
import { Container, Heading, Link, buttonStyles } from "ui"

export function Cta() {
  return (
    <div className="py-8 bg-gradient-to-b lg:py-16 from-bg to-muted">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <Heading className="text-2xl sm:text-3xl" level={3}>
            Justd is Open Source
          </Heading>
          <p className="mt-2 mb-4 text-base lg:text-lg text-muted-fg">
            Our code's chillin' on GitHub - dive in, peep it, or drop some hot commits if you're
            feelin' it!
          </p>

          <Link
            target="_blank"
            href={siteConfig.repo}
            className={buttonStyles({ size: "large", appearance: "outline" })}
          >
            <IconBrandGithub />
            GitHub
          </Link>
        </div>
      </Container>
    </div>
  )
}
