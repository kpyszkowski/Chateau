export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGODB_URI: string
      ACCESS_TOKEN_SECRET: string
      REFRESH_TOKEN_SECRET: string
      ACCESS_TOKEN_AGE: string | number
      REFRESH_TOKEN_AGE: string | number
    }
  }
}
