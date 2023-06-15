export interface AuthServiceParametersType {
  accessTokenSecret: string
  accessTokenAge: string | number
  refreshTokenSecret: string
  refreshTokenAge: string | number
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
