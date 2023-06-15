import type { JwtPayload as JwtPayloadType } from 'jsonwebtoken'
import type { TokenPayloadType } from 'types'

export type AgeType = string | number

export interface AuthServiceParametersType {
  accessTokenSecret: string
  accessTokenAge: AgeType
  refreshTokenSecret: string
  refreshTokenAge: AgeType
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

export type AuthRefreshAccessTokenServiceParametersType = {
  refreshToken: string
}
