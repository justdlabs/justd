export function convertToTree(paths: string[]) {
  const root: Record<string, any> = {}

  paths.forEach((path) => {
    const parts = path.split("/")
    let current = root

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = {
          name: part,
          type: index === parts.length - 1 ? "file" : "directory",
          children: index === parts.length - 1 ? undefined : {}
        }
      }
      current = current[part].children || {}
    })
  })

  // @ts-ignore
  const transform = (node: Record<string, any>) => {
    // @ts-ignore
    return Object.values(node).map((child) => ({
      name: child.name,
      type: child.type,
      children: child.children ? transform(child.children) : undefined
    }))
  }

  return transform(root)
}
