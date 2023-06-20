import type { PropsWithChildren } from 'react'

export interface ConversationThumbnailProps extends PropsWithChildren {
  name?: string
  latestMessage: string
  latestMessageDate: string
  participants: {
    id: string
    name: string
    isAvailable: boolean
  }[]
  isUnread?: boolean
  userId: string
}
