import { Router } from 'express'
import type { Router as RouterType } from 'express'

const authRouter: RouterType = Router()

authRouter.get('/sign-in', (req, res) => {
  res.status(200)
})
authRouter.get('/sign-up', (req, res) => {
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
