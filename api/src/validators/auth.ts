import * as yup from 'yup'

export const signInUserSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
})

export const signUpUserSchema = yup.object({
  name: yup.string().max(64).required(),
  email: yup.string().email().max(64).required(),
  password: yup.string().min(8).max(32).required(),
})
