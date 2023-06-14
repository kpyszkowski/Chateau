import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  email: { type: String, required: true, maxLength: 64 },
  password: { type: String, required: true, minLength: 8, maxLength: 32 },
})

export const UserModel = model('User', userSchema)
