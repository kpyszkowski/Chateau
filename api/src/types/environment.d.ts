export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGODB_USER: string
      MONGODB_PASSWORD: string
      MONGODB_HOST: string
      MONGODB_PORT: number
      ACCESS_TOKEN_SECRET: string
      REFRESH_TOKEN_SECRET: string
      ACCESS_TOKEN_TTL: number
      REFRESH_TOKEN_TTL: number
    }
  }
}
