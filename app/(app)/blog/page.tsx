import { Header } from "@/components/header"
import dayjs from "dayjs"
import Link from "next/link"
import { Avatar, Card, Container } from "ui"
import { blog } from "#site/content"

export default function Page() {
  return (
    <div>
      <Header>
        Bl
        <span className="text-muted-fg">og</span>
      </Header>
      <Container className="py-4 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {blog
            .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
            .map((item) => (
              <Card className="flex relative flex-col" key={item.slug}>
                <Link href={item.slug} className="absolute inset-0 size-full" />
                <Card.Header className="flex-1" title={item.title}>
                  <Card.Description className="line-clamp-2">{item.description}</Card.Description>
                </Card.Header>
                <Card.Footer>
                  <div className="flex gap-x-2 justify-between items-center w-full">
                    <Avatar
                      alt={item.author}
                      src={`https://github.com/${item.author}.png`}
                      shape="square"
                      size="small"
                    />
                    <span className="font-mono text-sm text-muted-fg">
                      {dayjs(item.published).format("MMMM D, YYYY")}
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  )
}
