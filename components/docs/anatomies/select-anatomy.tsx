import { Select } from 'ui'

export default function SelectAnatomy() {
  return (
    <Select>
      <Select.Trigger>Select Provider</Select.Trigger>
      <Select.List>
        <Select.Option>GitHub</Select.Option>
        <Select.Option>GitLab</Select.Option>
        <Select.Option>Bitbucket</Select.Option>
      </Select.List>
    </Select>
  )
}
