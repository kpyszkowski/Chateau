import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  email: { type: String, required: true, unique: true, maxLength: 64 },
  password: { type: String, required: true, maxLength: 72 },
})

export const UserModel = model('User', userSchema)
