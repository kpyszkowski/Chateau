import type { PropsWithChildren } from 'react'

export interface AvatarProps extends PropsWithChildren {
  name: string
  showStatus?: boolean
  isAvaliable?: boolean
  isLarge?: boolean
}
