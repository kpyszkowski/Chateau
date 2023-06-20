import { BadRequestError, ServerError } from '@/helpers'
import type { Request, Response, NextFunction } from 'express'
import type { AnyObjectSchema } from 'yup'
import { ValidationError } from 'yup'

export const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req

    try {
      await schema.validate(body)
      return next()
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const { message } = error
        throw BadRequestError(message)
      }

      throw ServerError()
    }
  }
