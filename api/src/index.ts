import express, { json } from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import 'dotenv/config'
import { configureDatabase } from '@/configs'
import { authRouter } from '@/routers'
import { authorize } from '@/middlewares'

const { PORT, MONGODB_USER, MONGODB_HOST, MONGODB_PASSWORD, MONGODB_PORT } =
  process.env
configureDatabase({
  username: MONGODB_USER,
  password: MONGODB_PASSWORD,
  host: MONGODB_HOST,
  port: MONGODB_PORT,
})

const app = express()
app.use(cors())
app.use(json())
app.use(cookieParser())

app.use(authRouter)

app.get('/protected-endpoint', authorize, (req: Request, res: Response) => {
  res
    .status(200)
    .send(`This endpoint is protected: ${req.body.decodedToken.email}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
