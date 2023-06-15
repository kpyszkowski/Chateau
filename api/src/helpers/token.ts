import type { AgeType } from '@/types'
import jwt from 'jsonwebtoken'
import type {
  Secret as SecretType,
  JwtPayload as PayloadType,
} from 'jsonwebtoken'

export const getToken = (
  payload: PayloadType,
  secret: SecretType,
  age: AgeType,
) =>
  jwt.sign(payload, secret, {
    expiresIn: age,
  })
