import { Accordion } from "ui"

export default function AccordionAnatomy() {
  return (
    <Accordion>
      <Accordion.Item currentId={1}>
        <Accordion.Trigger>What is a VPS?</Accordion.Trigger>
        <Accordion.Content>...</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item currentId={2}>
        <Accordion.Trigger>What is cloud hosting?</Accordion.Trigger>
        <Accordion.Content>...</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
