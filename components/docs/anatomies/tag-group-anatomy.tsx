import { Tag } from 'ui'

export default function TagGroupAnatomy() {
  return (
    <Tag.Group label="Serverless" selectionMode="multiple">
      <Tag.List>
        <Tag.Item>AWS Lambda</Tag.Item>
        <Tag.Item>Google Cloud Functions</Tag.Item>
        <Tag.Item>Azure Functions</Tag.Item>
      </Tag.List>
    </Tag.Group>
  )
}
