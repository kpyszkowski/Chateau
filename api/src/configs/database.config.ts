import mongoose from 'mongoose'
import type { DatabaseConfigParamsType } from '@/types'

export const configureDatabase = async (params: DatabaseConfigParamsType) => {
  const { username, password, host, port } = params
  try {
    console.log('Connecting to the database...')
    await mongoose.connect(
      `mongodb://${username}:${password}@${host}:${port}`,
      {
        authMechanism: 'DEFAULT',
      },
    )
  } catch (error) {
    mongoose.connection.close()
    console.error(`Error while connecting database: ${error}`)
    process.exit(1)
  } finally {
    console.log('Database connection has been estabilised.')
  }
}
