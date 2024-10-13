import { Disclosure } from 'ui'

export default function DisclosureDemo() {
  return (
    <Disclosure>
      <Disclosure.Trigger>What are the benefits of regular exercise?</Disclosure.Trigger>
      <Disclosure.Panel>
        <p>
          Regular exercise can improve your overall health, boost your mood, increase energy levels,
          and help you maintain a healthy weight.
        </p>
      </Disclosure.Panel>
    </Disclosure>
  )
}
