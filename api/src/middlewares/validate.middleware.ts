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
      res.status(400)

      if (error instanceof ValidationError) {
        return res.json({
          message: 'auth/validation-error',
          details: error.message,
        })
      }

      return res.json({ error })
    }
  }
