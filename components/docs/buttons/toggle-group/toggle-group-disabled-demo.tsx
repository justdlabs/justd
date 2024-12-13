import { Toggle, ToggleGroup } from "ui"

export default function ToggleGroupSelectionModeDemo() {
  return (
    <ToggleGroup isDisabled>
      <Toggle id="left">Left</Toggle>
      <Toggle id="center">Center</Toggle>
      <Toggle id="right">Right</Toggle>
    </ToggleGroup>
  )
}
