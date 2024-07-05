import * as runtime from 'react/jsx-runtime'

export const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}
