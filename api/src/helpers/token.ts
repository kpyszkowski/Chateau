import type { AgeType, PayloadType as CustomPayloadType } from '@/types'
import jwt from 'jsonwebtoken'
import type {
  Secret as SecretType,
  JwtPayload as BasePayloadType,
} from 'jsonwebtoken'

type PayloadType = string | (BasePayloadType & CustomPayloadType)

export const getToken = (
  payload: PayloadType,
  secret: SecretType,
  age: AgeType,
) =>
  jwt.sign(payload, secret, {
    expiresIn: age,
  })

export const decodeToken = (token: string, secret: SecretType) => {
  try {
    const decoded = jwt.verify(token, secret)

    return decoded as PayloadType
  } catch (error) {
    throw error
  }
}

export const validateTokenHeader = (header: string) => {
  const regex = /^Bearer ((?:\.?(?:[A-Za-z0-9-_]+)){3})$/gm

  return regex.test(header)
}
