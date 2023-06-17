import {
  comparePasswords,
  decodeToken,
  getHashedPassword,
  getToken,
} from '@/helpers'
import { UserModel, RefreshTokenModel } from '@/models'
import type {
  AuthServiceParametersType,
  AuthSignInServiceParametersType,
  AuthSignUpServiceParametersType,
  AuthRefreshTokensServiceParametersType,
  AuthSignOutServiceParametersType,
} from '@/types'

export class AuthService {
  #accessTokenSecret
  #accessTokenTTL
  #refreshTokenSecret
  #refreshTokenTTL

  constructor(parameters: AuthServiceParametersType) {
    const {
      accessTokenSecret,
      accessTokenTTL,
      refreshTokenSecret,
      refreshTokenTTL,
    } = parameters

    this.#accessTokenSecret = accessTokenSecret
    this.#accessTokenTTL = accessTokenTTL
    this.#refreshTokenSecret = refreshTokenSecret
    this.#refreshTokenTTL = refreshTokenTTL
  }

  async signIn(parameters: AuthSignInServiceParametersType) {
    const { email, password } = parameters

    const foundUser = await UserModel.findOne({ email })
    if (!foundUser) {
      return {
        statusCode: 404,
        message: 'auth/user-not-found',
      }
    }

    const isPasswordValid = await comparePasswords(password, foundUser.password)
    if (!isPasswordValid) {
      console.log({ isPasswordValid })
      return {
        statusCode: 401,
        message: 'auth/invalid-password',
      }
    }

    const accessToken = getToken(
      { id: foundUser._id, email: foundUser.email },
      this.#accessTokenSecret,
      this.#accessTokenTTL,
    )
    const refreshToken = getToken(
      { id: foundUser._id, email: foundUser.email },
      this.#refreshTokenSecret,
      this.#refreshTokenTTL,
    )

    const storedRefreshToken = await RefreshTokenModel.create({
      userId: foundUser._id,
      token: refreshToken,
    })
    if (!storedRefreshToken) {
      return {
        statusCode: 400,
        message: 'auth/unable-to-store-refresh-token',
      }
    }

    return {
      statusCode: 200,
      message: 'auth/signed-in',
      payload: { accessToken, refreshToken },
    }
  }

  async signUp(parameters: AuthSignUpServiceParametersType) {
    const { name, email, password } = parameters

    const foundUser = await UserModel.findOne({ email })
    if (foundUser) {
      return {
        statusCode: 400,
        message: 'auth/user-already-exists',
      }
    }

    const hashedPassword = await getHashedPassword(password, 10)
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    })
    if (newUser) {
      return {
        statusCode: 200,
        message: 'auth/signed-up',
      }
    }

    return {
      statusCode: 400,
      message: 'auth/unable-to-sign-up',
    }
  }

  async signOut(parameters: AuthSignOutServiceParametersType) {
    const { userId, refreshToken } = parameters

    const removedRefreshToken = await RefreshTokenModel.findOneAndRemove({
      userId,
      token: refreshToken,
    })
    if (!removedRefreshToken) {
      return {
        statusCode: 400,
        message: 'auth/unable-to-sign-out',
      }
    }

    return {
      statusCode: 200,
      message: 'auth/signed-out',
    }
  }

  async refreshTokens(parameters: AuthRefreshTokensServiceParametersType) {
    const { refreshToken } = parameters
    if (!refreshToken) {
      return {
        statusCode: 400,
        message: 'auth/refresh-token-expired',
      }
    }

    const tokenPayload = decodeToken(refreshToken, this.#refreshTokenSecret)
    if (!tokenPayload) {
      return {
        statusCode: 400,
        message: 'auth/unable-to-refresh-tokens',
      }
    }

    const { id, email } = tokenPayload

    const storedRefreshToken = await RefreshTokenModel.findOne({
      userId: id,
      token: refreshToken,
    })

    console.log({
      id,
      refreshToken,
      storedRefreshToken: storedRefreshToken?.token,
      userId: storedRefreshToken?.userId,
      idMatch: id === storedRefreshToken?.userId,
      tokenMatch: storedRefreshToken?.token === refreshToken,
    })

    if (!storedRefreshToken) {
      return {
        statusCode: 400,
        message: 'auth/refresh-token-compromised',
      }
    }

    const newAccessToken = getToken(
      { id, email },
      this.#accessTokenSecret,
      this.#accessTokenTTL,
    )
    const newRefreshToken = getToken(
      { id, email },
      this.#refreshTokenSecret,
      this.#refreshTokenTTL,
    )

    storedRefreshToken.updateOne({ token: newRefreshToken })
    const updatedRefreshToken = await storedRefreshToken.save()
    if (!updatedRefreshToken) {
      return {
        statusCode: 400,
        message: 'auth/unable-to-store-refresh-token',
      }
    }

    return {
      statusCode: 200,
      message: 'auth/refreshed-tokens',
      payload: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    }
  }
}
