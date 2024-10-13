import { Disclosure, DisclosureGroup } from 'ui'

export default function DisclosureAnatomy() {
  return (
    <DisclosureGroup defaultExpandedKeys={['x']}>
      <Disclosure id="x">
        <Disclosure.Trigger>Q1</Disclosure.Trigger>
        <Disclosure.Panel>A1</Disclosure.Panel>
      </Disclosure>
      <Disclosure id="y">
        <Disclosure.Trigger>Q2</Disclosure.Trigger>
        <Disclosure.Panel>A2</Disclosure.Panel>
      </Disclosure>
      <Disclosure id="z">
        <Disclosure.Trigger>Q3</Disclosure.Trigger>
        <Disclosure.Panel>A3</Disclosure.Panel>
      </Disclosure>
    </DisclosureGroup>
  )
}
