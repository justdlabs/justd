import * as React from 'react'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselHandler,
  CarouselItem
} from 'ui'

export default function CarouselDemo() {
  return (
    <Carousel className="w-full [&_.xrkr]:h-56 [&_.xrkr]:overflow-hidden [&_.xrkr]:flex [&_.xrkr]:flex-col max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <div className="bg-fg/5 border-b flex-1" />
              <CardHeader>
                <CardTitle>Discover the World</CardTitle>
                <CardDescription>Explore amazing places around the globe.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card>
              <div className="bg-fg/5 border-b flex-1" />
              <CardHeader>
                <CardTitle>Innovate Your Life</CardTitle>
                <CardDescription>Find cutting-edge tech solutions for everyday problems.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card>
              <div className="bg-fg/5 border-b flex-1" />
              <CardHeader>
                <CardTitle>Fitness Goals</CardTitle>
                <CardDescription>Join our community and achieve your fitness dreams.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card>
              <div className="bg-fg/5 border-b flex-1" />
              <CardHeader>
                <CardTitle>Healthy Recipes</CardTitle>
                <CardDescription>Delicious and nutritious meals for a healthier you.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card>
              <div className="bg-fg/5 border-b flex-1" />
              <CardHeader>
                <CardTitle>Travel Tips</CardTitle>
                <CardDescription>Get the best tips for a hassle-free travel experience.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton slot="previous" />
        <CarouselButton slot="next" />
      </CarouselHandler>
    </Carousel>
  )
}
