import * as yup from 'yup'

export const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
})

export const signUpSchema = yup.object({
  name: yup.string().max(64).required(),
  email: yup.string().email().max(64).required(),
  password: yup.string().min(8).max(32).required(),
})
