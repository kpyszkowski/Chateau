import { Router } from 'express'
import { validate } from '@/middlewares'
import { signInSchema, signUpSchema } from '@/schemas'
import type { Router as RouterType } from 'express'

const authRouter: RouterType = Router()

authRouter.get('/sign-in', validate(signInSchema), (req, res) => {
  res.status(200)
})
authRouter.get('/sign-up', validate(signUpSchema), (req, res) => {
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
