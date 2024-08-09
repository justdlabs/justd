'use client'

import * as React from 'react'

import Image from 'next/image'
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

export default function CarouselWithCollectionDemo() {
  return (
    <Carousel className="w-full [&_.xrkr]:overflow-hidden [&_.xrkr]:flex [&_.xrkr]:flex-col max-w-xs">
      <CarouselContent items={items}>
        {(item) => (
          <CarouselItem id={item.id}>
            <Card className="p-1">
              <Image
                className="rounded-md h-40 object-center object-cover"
                src={`/slides/slide-${item.id}.jpg`}
                alt="image 5"
                width={400}
                height={300}
              />
              <CardHeader className="p-3">
                <CardTitle className="line-clamp-1 sm:text-lg">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
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

const items = [
  {
    id: 1,
    title: 'Vintage Leather Jacket',
    description: 'Classic brown leather jacket, perfect for a stylish retro look.'
  },
  {
    id: 2,
    title: 'Wireless Bluetooth Headphones',
    description: 'Experience high-quality sound with these comfortable, noise-canceling headphones.'
  },
  {
    id: 3,
    title: 'Organic Cotton T-Shirt',
    description: 'Soft and eco-friendly t-shirt made from 100% organic cotton.'
  },
  {
    id: 4,
    title: 'Stainless Steel Water Bottle',
    description: 'Keep your drinks cold or hot with this durable, insulated water bottle.'
  },
  {
    id: 5,
    title: 'Running Shoes',
    description: 'Lightweight and comfortable shoes designed for optimal performance.'
  },
  {
    id: 6,
    title: 'Smartwatch',
    description: 'Stay connected and track your fitness with this sleek smartwatch.'
  },
  {
    id: 7,
    title: 'Portable Charger',
    description: 'Never run out of battery with this high-capacity portable charger.'
  }
]
