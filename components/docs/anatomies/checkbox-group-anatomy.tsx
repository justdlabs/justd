import { Checkbox, CheckboxGroup } from 'ui'

export default function CheckboxGroupAnatomy() {
  return (
    <CheckboxGroup label="Settings">
      <Checkbox value="notifications">Enable notifications</Checkbox>
      <Checkbox value="auto_update">Auto-update applications</Checkbox>
      <Checkbox value="dark_mode">Enable dark mode</Checkbox>
    </CheckboxGroup>
  )
}
