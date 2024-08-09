import { Container } from 'ui'

import { Blocks } from './blocks'
import { Controller } from './controller'

export function Themes() {
  return (
    <Container className="sm:py-16 py-8">
      <Controller />
      <Blocks />
    </Container>
  )
}
