import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import { configureDatabase } from '@/configs'
import { authRouter } from '@/routers'

const { PORT, MONGODB_URI } = process.env
configureDatabase({ databaseUri: MONGODB_URI })

const app = express()
app.use(cors())

app.use(authRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
