import mongoose from 'mongoose'
import type { DatabaseConfigParamsType } from '@/types'

export const configureDatabase = (params: DatabaseConfigParamsType) => {
  const { databaseUri } = params
  try {
    mongoose.connect(databaseUri)
  } catch (error) {
    console.error(`Error while connecting database: ${error}`)
  } finally {
    console.log('Database connection has been estabilised.')
  }
}
