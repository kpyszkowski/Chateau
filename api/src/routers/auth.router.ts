import { Router } from 'express'
import { authorize, validate } from '@/middlewares'
import { signInSchema, signUpSchema } from '@/schemas'
import type { Router as RouterType } from 'express'
import { AuthController } from '@/controllers'

const controller = new AuthController()

const authRouter: RouterType = Router()

authRouter.post('/sign-in', validate(signInSchema), controller.signIn)
authRouter.post('/sign-up', validate(signUpSchema), controller.signUp)

authRouter.get('/sign-out', authorize, controller.signOut)

authRouter.get('/refresh-tokens', controller.refreshTokens)

export default authRouter
