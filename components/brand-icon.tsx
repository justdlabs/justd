import {
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandReactjs,
  IconBrandTailwindcss,
  IconBrandTypescript,
  IconFile,
} from "justd-icons"

export const BrandIcon = ({ label }: { label: string }) => {
  const ext = label.toLowerCase()
  if (ext.endsWith(".blade.php")) return <IconBrandLaravel className="text-red-500 size-4" />
  switch (label.split(".").pop()?.toLowerCase()) {
    case "php":
      return <IconBrandPhp className="text-indigo-500 size-4" />
    case "tsx":
      return <IconBrandReactjs className="text-cyan-500 size-4" />
    case "ts":
      return <IconBrandTypescript className="text-blue-500 size-4" />
    case "css":
      return <IconBrandTailwindcss className="size-4 text-sky-500" />
    default:
      return <IconFile />
  }
}
