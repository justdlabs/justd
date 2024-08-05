import * as React from 'react'

import { Card, CardTitle, Carousel, CarouselButton, CarouselContent, CarouselHandler, CarouselItem } from 'ui'

export default function CarouselOptionsDemo() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true
      }}
      className="w-full max-w-2xl"
    >
      <CarouselContent items={Array.from({ length: 16 }, (_, id) => ({ id: id + 1 }))}>
        {({ id }) => (
          <CarouselItem id={id} className="basis-1/2 lg:basis-1/3">
            <Card className="flex aspect-square items-center justify-center">
              <CardTitle>{id}</CardTitle>
            </Card>
          </CarouselItem>
        )}
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton slot="previous" />
        <CarouselButton slot="next" />
      </CarouselHandler>
    </Carousel>
  )
}
