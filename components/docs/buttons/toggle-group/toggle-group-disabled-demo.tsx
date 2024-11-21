import { Toggle, ToggleGroup } from "ui"

export default function ToggleGroupSelectionModeDemo() {
  return (
    <ToggleGroup isDisabled>
      <Toggle>Left</Toggle>
      <Toggle>Center</Toggle>
      <Toggle>Right</Toggle>
    </ToggleGroup>
  )
}
