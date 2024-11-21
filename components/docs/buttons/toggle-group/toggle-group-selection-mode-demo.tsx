import { Toggle, ToggleGroup } from "ui"

export default function ToggleGroupSelectionModeDemo() {
  return (
    <ToggleGroup defaultSelectedKeys={["center"]} selectionMode="single">
      <Toggle id="left">Left</Toggle>
      <Toggle id="center">Center</Toggle>
      <Toggle id="right">Right</Toggle>
    </ToggleGroup>
  )
}
