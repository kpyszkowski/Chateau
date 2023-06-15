import { AuthService } from '@/services'
import type { Request, Response } from 'express'

const {
  ACCESS_TOKEN_AGE,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_AGE,
  REFRESH_TOKEN_SECRET,
} = process.env

const service = new AuthService({
  accessTokenAge: ACCESS_TOKEN_AGE,
  accessTokenSecret: ACCESS_TOKEN_SECRET,
  refreshTokenAge: REFRESH_TOKEN_AGE,
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

      res.cookie('refresh-token', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: REFRESH_TOKEN_AGE as number,
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
  async refreshAccessToken(req: Request, res: Response) {
    console.log(req.cookies)
    res.sendStatus(200)
  }
  //   async signOut(req: Request, res: Response) {}
}
