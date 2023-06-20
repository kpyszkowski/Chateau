import type { JwtPayload as JwtPayloadType } from 'jsonwebtoken'
import type { TokenPayloadType } from 'types'

export type AgeType = string | number

export interface AuthServiceParametersType {
  accessTokenSecret: string
  accessTokenTTL: AgeType
  refreshTokenSecret: string
  refreshTokenTTL: AgeType
}

export type AuthSignInServiceParametersType = {
  email: string
  password: string
}

export type AuthSignUpServiceParametersType = {
  name: string
  email: string
  password: string
}

export type PayloadType = JwtPayloadType & TokenPayloadType

export type AuthRefreshTokensServiceParametersType = {
  refreshToken: string
}

export type AuthSignOutServiceParametersType = {
  refreshToken: string
  userId: string
}

export type ConversationServiceCreateParametersType = {
  userId: string
  participantIds: string[]
}
export type ConversationServiceLeaveParametersType = {
  userId: string
  conversationId: string
}
export type ConversationServiceAddParticipantsParametersType = {
  conversationId: string
  participantIds: string[]
}
export type ConversationServiceSetNameParametersType = {
  conversationId: string
  name: string
}
export type ConversationServiceGetMessagesParametersType = {
  conversationId: string
}
export type ConversationServiceGetListingParametersType = {
  userId: string
  itemsCount: number
  pageNumber: number
}
