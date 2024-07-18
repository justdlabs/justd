import * as React from 'react'

import { Button } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { Card, CardContent, Carousel, type CarouselApi, CarouselButton, CarouselContent, CarouselItem } from 'ui'

export default function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index)
      setCurrent(index + 1)
    }
  }

  return (
    <Carousel setApi={setApi} className="w-full max-w-sm">
      <CarouselContent items={Array.from({ length: 10 }, (_, id) => ({ id: id + 1 }))}>
        {({ id }) => (
          <CarouselItem id={id}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{id}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        )}
      </CarouselContent>
      <div className="flex justify-between mt-4 items-center">
        <div className="py-2 gap-1 flex text-center text-sm text-muted-foreground">
          {Array.from({ length: 10 }).map((_, index) => (
            <Button
              className={twJoin(
                'focus:outline-none transition rounded-xl',
                current === index + 1 ? 'w-6 h-3 bg-primary hover:bg-primary/80' : 'bg-fg/10 hover:bg-fg/15 w-3 h-3'
              )}
              aria-label={`Slide ${current} of ${count}`}
              onPress={() => handleSelect(index)}
              key={index}
            />
          ))}
        </div>

        <div className="space-x-2">
          <CarouselButton slot="previous" />
          <CarouselButton slot="next" />
        </div>
      </div>
    </Carousel>
  )
}
