import { Router } from 'express'
import { validate } from '@/middlewares'
import { signInUserSchema, signUpUserSchema } from '@/validators'
import type { Router as RouterType } from 'express'

const authRouter: RouterType = Router()

authRouter.get('/sign-in', validate(signInUserSchema), (req, res) => {
  res.status(200)
})
authRouter.get('/sign-up', validate(signUpUserSchema), (req, res) => {
  res.status(200)
})
authRouter.get('/sign-out', (req, res) => {
  res.status(200)
})
authRouter.get('/access-token', (req, res) => {
  res.status(200)
})
authRouter.get('/refresh-token', (req, res) => {
  res.status(200)
})

export default authRouter
