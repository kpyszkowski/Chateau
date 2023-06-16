import { Schema, model } from 'mongoose'

const { REFRESH_TOKEN_TTL } = process.env

const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: Date.now,
      index: { expires: REFRESH_TOKEN_TTL / 1000 },
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      autoIndex: false,
      // TODO: Add validator to limit max 3 tokens per user at once.
    },
  },
  { timestamps: true },
)

refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export const RefreshTokenModel = model('RefreshToken', refreshTokenSchema)
