import express, { json } from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

import 'dotenv/config'
import { configureDatabase } from '@/configs'
import { authRouter } from '@/routers'
import { authorize } from '@/middlewares'

const { PORT, MONGODB_URI } = process.env
configureDatabase({ databaseUri: MONGODB_URI })

const app = express()
app.use(cors())
app.use(json())

app.use(authRouter)

app.get('/protected-endpoint', authorize, (req: Request, res: Response) => {
  res
    .status(200)
    .send(`This endpoint is protected: ${req.body.decodedToken.email}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
