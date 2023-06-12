import type { FormHTMLAttributes, PropsWithChildren } from 'react'

export interface FormBaseProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {
  heading: string
  description: string
}
