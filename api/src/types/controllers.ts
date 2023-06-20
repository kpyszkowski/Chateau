import type { TokenPayloadType } from 'types'

export type AuthenticatedRequestBodyType<T = unknown> = {
  decodedToken: TokenPayloadType
  [x: string]: unknown
} & T
