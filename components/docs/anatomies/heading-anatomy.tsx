import { Heading } from 'ui'

export default function HeadingAnatomy() {
  const level = 2 // 1, 2, 3, 4 (default 1)
  return <Heading level={level}>The quick brown fox jumps over the lazy dog</Heading>
}
