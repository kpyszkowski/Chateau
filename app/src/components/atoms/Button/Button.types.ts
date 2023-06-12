import type { PropsWithChildren } from 'react'

export type ButtonVariantType = 'primary' | 'secondary'

export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariantType
}
