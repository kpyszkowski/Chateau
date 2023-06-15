import { comparePasswords, getHashedPassword, getToken } from '@/helpers'
import { UserModel } from '@/models'
import type {
  AuthServiceParametersType,
  AuthSignInServiceParametersType,
  AuthSignUpServiceParametersType,
} from '@/types'

export class AuthService {
  #accessTokenSecret
  #accessTokenAge
  #refreshTokenSecret
  #refreshTokenAge

  constructor(parameters: AuthServiceParametersType) {
    const {
      accessTokenSecret,
      accessTokenAge,
      refreshTokenSecret,
      refreshTokenAge,
    } = parameters

    this.#accessTokenSecret = accessTokenSecret
    this.#accessTokenAge = accessTokenAge
    this.#refreshTokenSecret = refreshTokenSecret
    this.#refreshTokenAge = refreshTokenAge
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
      this.#accessTokenAge,
    )
    const refreshToken = getToken(
      { id: foundUser._id, email: foundUser.email },
      this.#accessTokenSecret,
      this.#accessTokenAge,
    )
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
}
