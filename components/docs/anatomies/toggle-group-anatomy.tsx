import { Toggle, ToggleGroup } from "ui"

export default function ToggleGroupAnatomy(props: React.ComponentProps<typeof ToggleGroup>) {
  return (
    <ToggleGroup {...props}>
      <Toggle />
      <Toggle />
      <Toggle />
    </ToggleGroup>
  )
}
