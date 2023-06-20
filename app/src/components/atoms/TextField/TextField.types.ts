import type { InputHTMLAttributes } from 'react'
import type { IconType } from 'react-icons'

export type ButtonVariantType = 'primary' | 'secondary'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isLabelHidden?: boolean
  errorMessage?: string
  buttonCallback?: () => void
  buttonIcon?: IconType
  buttonLabel?: string
}
