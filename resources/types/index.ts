import type { formatOnlyForTailwindVariable } from '@/resources/lib/colors'

export interface ColorShade {
  shade: string
  color: string
}

export interface ColorItemProps {
  name: string
  children: ColorShade[]
}

export type FormatOnlyForTailwindVariableType =
  (typeof formatOnlyForTailwindVariable)[number]['format']
