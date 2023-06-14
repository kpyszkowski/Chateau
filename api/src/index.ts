import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import { configureDatabase } from '@/configs'

const { PORT, MONGODB_URI } = process.env

const app = express()
app.use(cors())

configureDatabase({ databaseUri: MONGODB_URI })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
