import type { PropsWithChildren } from 'react'

export type MessageItemsAlignmentType = 'left' | 'right'
export type MessageVariantType = 'sender' | 'recipient'

export interface MessageProps extends PropsWithChildren {
  variant: MessageVariantType
  timeStamp: string
}
