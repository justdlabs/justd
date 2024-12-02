import { Carousel } from "ui"

export default function CarouselAnatomy() {
  return (
    <Carousel className="w-full **:data-[slot=card]:h-56 **:data-[slot=card]:overflow-hidden **:data-[slot=card]:flex **:data-[slot=card]:flex-col max-w-xs">
      <Carousel.Content>
        <Carousel.Item className="basis-1/2">1</Carousel.Item>
        <Carousel.Item className="basis-1/2">2</Carousel.Item>
        <Carousel.Item className="basis-1/2">3</Carousel.Item>
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button slot="previous" />
        <Carousel.Button slot="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
