import { AuthService } from '@/services'
import type { Request, Response } from 'express'

const {
  ACCESS_TOKEN_TTL,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_TTL,
  REFRESH_TOKEN_SECRET,
} = process.env

const service = new AuthService({
  accessTokenTTL: ACCESS_TOKEN_TTL,
  accessTokenSecret: ACCESS_TOKEN_SECRET,
  refreshTokenTTL: REFRESH_TOKEN_TTL,
  refreshTokenSecret: REFRESH_TOKEN_SECRET,
})

export class AuthController {
  async signIn(req: Request, res: Response) {
    const { email, password } = req.body

    const { statusCode, message, payload } = await service.signIn({
      email,
      password,
    })

    if (payload) {
      const { accessToken, refreshToken } = payload

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: REFRESH_TOKEN_TTL,
      })
      return res.status(statusCode).json({
        message,
        accessToken,
      })
    }

    return res.status(statusCode).json({
      message,
    })
  }
  async signUp(req: Request, res: Response) {
    const { name, email, password } = req.body

    const { statusCode, message } = await service.signUp({
      name,
      email,
      password,
    })

    return res.status(statusCode).json({
      message,
    })
  }
  async refreshTokens(req: Request, res: Response) {
    const { refreshToken } = req.cookies

    const { statusCode, message, payload } = await service.refreshTokens({
      refreshToken,
    })

    if (payload) {
      const { accessToken, refreshToken } = payload

      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
        maxAge: REFRESH_TOKEN_TTL,
      })
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: REFRESH_TOKEN_TTL,
      })

      return res.status(statusCode).json({
        message,
        accessToken,
      })
    }

    return res.status(statusCode).json({ message })
  }
  //   async signOut(req: Request, res: Response) {}
}
