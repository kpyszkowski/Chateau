import { UserModel } from '@/models'
import type {
  AuthServiceParametersType,
  AuthSignInServiceParametersType,
  AuthSignUpServiceParametersType,
} from '@/types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

    const isPasswordValid = await bcrypt.compare(password, foundUser.password)
    if (!isPasswordValid) {
      console.log({ isPasswordValid })
      return {
        statusCode: 401,
        message: 'auth/invalid-password',
      }
    }

    const accessToken = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      this.#accessTokenSecret,
      { expiresIn: this.#accessTokenAge },
    )
    const refreshToken = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      this.#refreshTokenSecret,
      { expiresIn: this.#refreshTokenAge },
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

    const hashedPassword = await bcrypt.hash(password, 10)

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
