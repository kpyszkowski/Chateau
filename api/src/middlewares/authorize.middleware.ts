import { decodeToken, validateTokenHeader } from '@/helpers'
import type { Request, Response, NextFunction } from 'express'
import { TokenExpiredError } from 'jsonwebtoken'

const { ACCESS_TOKEN_SECRET } = process.env

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization: tokenHeader = '' } = req.headers
  const isTokenHeaderValid = validateTokenHeader(tokenHeader)

  if (isTokenHeaderValid) {
    const errorMessage =
      tokenHeader.length === 0
        ? 'auth/missing-authorization-header'
        : 'auth/invalid-authorization-header'

    return res.status(400).json({
      message: errorMessage,
    })
  }

  try {
    const [, token] = tokenHeader.split(' ')

    const decodedToken = decodeToken(token, ACCESS_TOKEN_SECRET)

    req.body = Object.assign(req.body, { decodedToken })
    return next()
  } catch (error) {
    const isTokenExpired = error instanceof TokenExpiredError
    const errorMessage = isTokenExpired
      ? 'auth/token-expired'
      : 'auth/unauthorized'

    return res.status(401).json({ message: errorMessage })
  }
}
