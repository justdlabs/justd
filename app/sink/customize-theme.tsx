import colors from "tailwindcss/colors"
import { Select } from "ui"

export function CustomizeTheme() {
  const filteredColors = Object.fromEntries(
    Object.entries(colors).filter(([key]) => !["inherit", "current", "transparent", "black", "white"].includes(key))
  )

  console.log(filteredColors)
  return (
    <div className="p-32">
      <div className="flex items-center gap-x-2">
        <Select label="Primary">
          <Select.Trigger />
          <Select.List>
            {Object.entries(filteredColors).map(([key]) => (
              <Select.Option key={key} id={key}>
                {key}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
        <Select label="Gray">
          <Select.Trigger />
          <Select.List>
            {Object.entries(filteredColors).map(([key]) => (
              <Select.Option key={key} id={key}>
                {key}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
        <Select label="Accent">
          <Select.Trigger />
          <Select.List>
            {Object.entries(filteredColors).map(([key]) => (
              <Select.Option key={key} id={key}>
                {key}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>
    </div>
  )
}
