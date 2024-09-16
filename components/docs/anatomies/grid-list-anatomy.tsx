import { GridList } from "ui"

export default function GridListAnatomy() {
  return (
    <GridList selectionMode="single" aria-label="Select your favorite bands" className="min-w-64">
      <GridList.Item>Nirvana</GridList.Item>
      <GridList.Item>Radiohead</GridList.Item>
      <GridList.Item>Foo Fighters</GridList.Item>
      <GridList.Item>Arctic Monkeys</GridList.Item>
      <GridList.Item>The Strokes</GridList.Item>
    </GridList>
  )
}
