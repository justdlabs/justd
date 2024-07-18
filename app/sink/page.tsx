'use client'

import CarouselApiDemo from '@/components/docs/collections/carousel-api-demo'
import CarouselAutoplayDemo from '@/components/docs/collections/carousel-autoplay-demo'
import CarouselDemo from '@/components/docs/collections/carousel-demo'
import CarouselOrientationDemo from '@/components/docs/collections/carousel-orientation-demo'
import { Container } from 'ui'

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Page() {
  return (
    <Container>
      <div className="py-24">
        {/*<CarouselApiDemo />*/}
        <CarouselAutoplayDemo />
      </div>
    </Container>
  )
}
