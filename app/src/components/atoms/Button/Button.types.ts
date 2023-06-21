import type { PropsWithChildren } from 'react'

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariantType
  hiddenLabel?: string
}
